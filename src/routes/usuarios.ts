import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import z from 'zod';
import { database } from '../lib/prisma.js';
import { HTTPError } from '../utils/http-error.js';
import { v7 as uuidv7 } from 'uuid';

export async function Usuarios(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/usuarios/associar-chave/:usuarioId',
    schema: {
      tags: ['Usuarios'],
      summary: 'Associar uma ou mais chaves para um usuário retirar.',
      params: z.object({
        usuarioId: z.uuidv7(),
      }),
      body: z.object({
        // Renomeado para plural para maior clareza, já que é um array
        chavesId: z
          .array(z.uuidv7())
          .min(1, 'Pelo menos uma chave deve ser informada.'),
      }),
    },
    handler: async (req, reply) => {
      const { chavesId } = req.body;
      const { usuarioId } = req.params;

      try {
        const resultado = await database.$transaction(async (tx) => {
          // 1. Validar a existência do usuário e buscar suas autorizações atuais
          const usuario = await tx.usuarios.findUnique({
            where: { id: usuarioId },
            include: { Chaves_Usuarios: { select: { chaveId: true } } }, // Otimizado para pegar só o que precisamos
          });

          if (!usuario) {
            throw new HTTPError(404, 'Usuário não encontrado.');
          }

          // 2. Validar a existência de TODAS as chaves enviadas
          const chavesEncontradas = await tx.chave.findMany({
            where: { id: { in: chavesId } },
            select: { id: true },
          });

          // Se a contagem for diferente, um ou mais IDs de chave são inválidos
          if (chavesEncontradas.length !== chavesId.length) {
            throw new HTTPError(
              404,
              'Uma ou mais chaves não foram encontradas.',
            );
          }

          // 3. Lógica para criar APENAS as novas autorizações (a parte mais importante)
          const autorizacoesAtuais = new Set(
            usuario.Chaves_Usuarios.map((auth) => auth.chaveId),
          );

          const novasChavesParaAutorizar = chavesId.filter(
            (id) => !autorizacoesAtuais.has(id),
          );

          // Se não houver nenhuma chave nova para autorizar, podemos retornar sucesso sem fazer nada.
          if (novasChavesParaAutorizar.length === 0) {
            return {
              message:
                'Nenhuma nova autorização necessária. O usuário já possui permissão para todas as chaves informadas.',
            };
          }

          // 4. Preparar os dados para o `createMany` no formato correto
          const novasAutorizacoes = novasChavesParaAutorizar.map((chaveId) => ({
            id: uuidv7(), // Se o ID puder ser gerado pelo DB, melhor ainda
            usuarioId: usuarioId,
            chaveId: chaveId,
          }));

          // 5. Executar a criação em lote

          return await tx.chaves_Usuarios.createManyAndReturn({
            data: novasAutorizacoes,
          });
        });

        // 201 Created é mais apropriado para criação de recursos.
        return reply.status(201).send(resultado);
      } catch (error) {
        if (error instanceof HTTPError) {
          throw error;
        }

        app.log.fatal(error);
        throw new HTTPError(
          500,
          'Erro interno do servidor ao processar nova autorização',
        );
      }
    },
  });

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/usuarios/desassociar-chave/:usuarioId',
    schema: {
      summary: 'Remove a autorização de um usuário para uma ou mais chaves.',
      tags: ['Usuarios'],
      params: z.object({
        usuarioId: z.string().uuid(),
      }),
      body: z.object({
        chavesId: z
          .array(z.string().uuid())
          .min(1, 'Pelo menos uma chave deve ser informada.'),
      }),
    },
    handler: async (req, reply) => {
      const { usuarioId } = req.params;
      const { chavesId } = req.body;

      try {
        const resultado = await database.$transaction(async (tx) => {
          // 1. Primeiro, garantimos que o usuário existe.
          // Isso fornece um erro mais claro do que simplesmente não deletar nada.
          const usuario = await tx.usuarios.findUnique({
            where: {
              id: usuarioId,
            },
          });

          if (!usuario) {
            throw new HTTPError(404, 'Usuário não encontrado.');
          }

          // 2. Usamos `deleteMany` para remover todas as associações que correspondem aos critérios.
          // A operação é atômica e eficiente.
          const autorizacoesRemovidas = await tx.chaves_Usuarios.deleteMany({
            where: {
              // A associação deve pertencer ao usuário especificado...
              usuarioId: usuarioId,
              // ...E a chaveId deve estar na lista de chaves a serem removidas.
              chaveId: {
                in: chavesId,
              },
            },
          });

          // O `deleteMany` retorna um objeto com a contagem de registros deletados.
          // Isso é útil para confirmar que a operação teve o efeito esperado.
          return autorizacoesRemovidas;
        });

        // Retorna um 200 OK com a contagem de autorizações que foram removidas.
        return reply.status(200).send({
          message: 'Autorizações removidas com sucesso.',
          count: resultado.count,
        });
      } catch (error) {
        if (error instanceof HTTPError) {
          throw error;
        }

        app.log.fatal(error);
        throw new HTTPError(
          500,
          'Erro interno do servidor ao remover autorização',
        );
      }
    },
  });

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/usuarios',
    schema: {
      tags: ['Usuarios'],
      summary: 'Listar todos os Usuários',
      querystring: z.object({
        nome: z.uuidv7().optional(),
        matricula: z.uuidv7().optional(),
      }),
    },
    handler: async (req, reply) => {
      const filters = req.query;
      try {
        const usuarios = await database.usuarios.findMany({
          where: {
            ...(filters.nome && {
              nome: {
                contains: filters.nome,
                mode: 'insensitive',
              },
            }),
            ...(filters.matricula && {
              matricula: {
                contains: filters.matricula,
                mode: 'insensitive',
              },
            }),
          },
        });
        return reply.status(200).send(usuarios);
      } catch (error) {
        app.log.fatal(error);
        throw new HTTPError(
          500,
          'Ocorreu um erro interno ao listar os usuários.',
        );
      }
    },
  });
}
