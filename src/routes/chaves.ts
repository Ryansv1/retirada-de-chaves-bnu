import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { database } from '../lib/prisma.js';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import z from 'zod';
import AuthPreHandler from '../preHandlers/auth.prehandler.js';

export default async function Chaves(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/chaves',
    schema: {
      querystring: z.object({
        codigo: z.string().optional(),
        status: z.enum(['disponivel', 'indisponivel']).optional(),
      }),
    },
    preHandler: AuthPreHandler,
    handler: async (req, reply) => {
      try {
        const chaves = await database.chave.findMany({
          where: {
            ...(req.query.codigo && {
              OR: [
                {
                  Ambiente: {
                    codigo: {
                      contains: req.query.codigo,
                      mode: 'insensitive',
                    },
                  },
                },
                {
                  Armario: {
                    codigo: {
                      contains: req.query.codigo,
                      mode: 'insensitive',
                    },
                  },
                },
              ],
            }),
            // Lógica corrigida para o status
            // Se o status for 'disponivel', encontre chaves que não tenham NENHUM empréstimo PENDENTE.
            ...(req.query.status === 'disponivel' && {
              Emprestimo: {
                none: {
                  status: 'PENDENTE',
                },
              },
            }),

            // Se o status for 'indisponivel', encontre chaves que tenham PELO MENOS UM empréstimo PENDENTE.
            ...(req.query.status === 'indisponivel' && {
              Emprestimo: {
                some: {
                  status: 'PENDENTE',
                },
              },
            }),
          },
          include: {
            Ambiente: true,
            Armario: true,
          },
        });
        return reply.send(chaves);
      } catch (error) {
        app.log.fatal(error);
        throw new Error('Erro ao buscar chaves.');
      }
    },
  });

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/chaves/:id',
    schema: {
      params: z.object({
        id: z.uuidv7(),
      }),
    },
    handler: async (req, reply) => {
      try {
        const chave = await database.chave.findFirst({
          where: {
            id: req.params.id,
          },
          include: {
            Ambiente: true,
            Armario: true,
            Emprestimo: {
              where: {
                status: 'PENDENTE',
              },
              include: {
                UsuarioSolicitante: {
                  select: {
                    nome: true,
                  },
                },
              },
            },
          },
        });
        return reply.send(chave);
      } catch (error) {
        app.log.fatal(error);
        throw new Error('Erro ao buscar chaves.');
      }
    },
  });
}
