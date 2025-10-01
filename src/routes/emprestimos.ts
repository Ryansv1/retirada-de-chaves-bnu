import { FastifyInstance } from 'fastify';
import { database } from '../lib/prisma.js';
import z from 'zod';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { HTTPError } from '../utils/http-error.js';
import { v7 as uuidv7 } from 'uuid';
import { DateTime } from 'luxon';
import AuthenticatedOnly from '../preHandlers/auth.prehandler.js';
import { isAuthorized } from '../utils/user-permissions.js';

export default async function Emprestimos(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/emprestimos',
    preHandler: [AuthenticatedOnly],
    schema: {
      querystring: z.object({
        codigo: z.string().optional(),
        status: z.enum(['DEVOLVIDO', 'PENDENTE']).optional(),
        tipo: z.enum(['ADMINISTRATIVO', 'NORMAL']).optional(),
        dataRetirada: z.iso.date().optional(),
        dataRetorno: z.iso.date().optional(),
        nomeSolicitante: z.string().optional(),
        matriculaSolicitante: z.string().optional(),
      }),
    },
    handler: async (req, reply) => {
      const filters = req.query;
      try {
        const emprestimos = await database.emprestimo.findMany({
          where: {
            ...(filters.codigo && {
              Chave: {
                OR: [
                  {
                    Ambiente: {
                      codigo: {
                        contains: filters.codigo,
                        mode: 'insensitive',
                      },
                    },
                  },
                  {
                    Armario: {
                      codigo: {
                        contains: filters.codigo,
                        mode: 'insensitive',
                      },
                    },
                  },
                ],
              },
            }),
            ...(filters.nomeSolicitante && {
              UsuarioSolicitante: {
                nome: {
                  contains: filters.nomeSolicitante,
                  mode: 'insensitive',
                },
              },
              ...(filters.status && {
                status: filters.status,
              }),
              ...(filters.tipo && {
                tipo: filters.tipo,
              }),
              ...(filters.matriculaSolicitante && {
                UsuarioSolicitante: {
                  matricula: {
                    contains: filters.matriculaSolicitante,
                  },
                },
              }),

              ...(filters.dataRetirada && {
                dataRetirada: {
                  gte: DateTime.fromISO(filters.dataRetirada).toJSDate(),
                },
              }),

              ...(filters.dataRetorno && {
                dataRetorno: {
                  lte: DateTime.fromISO(filters.dataRetorno).toJSDate(),
                },
              }),
            }),
          },
          include: {
            Chave: {
              select: {
                id: true,
                tipo: true,
                Ambiente: true,
                Armario: true,
              },
            },
          },
        });
        return reply.status(200).send(emprestimos);
      } catch (error) {
        app.log.fatal(error);
        throw new HTTPError(500, 'Erro ao buscar os empréstimos');
      }
    },
  });

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/emprestimos/:emprestimoId',
    schema: {
      params: z.object({
        emprestimoId: z.uuidv7(),
      }),
    },
    preHandler: [AuthenticatedOnly],
    handler: async (req, reply) => {
      const { emprestimoId } = req.params;
      try {
        const emprestimo = await database.emprestimo.findUnique({
          where: {
            id: emprestimoId,
          },
          include: {
            Chave: {
              include: {
                Ambiente: true,
                Armario: true,
              },
            },
            OperadorDevolucao: {
              select: {
                id: true,
                name: true,
                email: true,
                role: true,
              },
            },
            OperadorSolicitacao: {
              select: {
                id: true,
                name: true,
                email: true,
                role: true,
              },
            },
            UsuarioDevolucao: true,
            UsuarioSolicitante: true,
          },
        });
        return reply.status(200).send(emprestimo);
      } catch (error) {
        app.log.fatal(error);
        throw new HTTPError(500, 'Erro ao buscar o empréstimo');
      }
    },
  });

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/emprestimos/retirada/:chaveId',
    schema: {
      params: z.object({
        chaveId: z.uuidv7(),
      }),
      body: z.object({
        matricula: z.string().min(7).max(11),
      }),
    },
    preHandler: [AuthenticatedOnly],
    handler: async (req, reply) => {
      const operadorId = req.session?.user.id;
      const { matricula } = req.body;
      const chaveId = req.params.chaveId;

      try {
        const novoEmprestimo = await database.$transaction(async (tx) => {
          if (!operadorId) {
            throw new HTTPError(400, 'ID do Operador Faltante.');
          }

          // 1. Buscamos o requisitante primeiro.
          const requisitante = await tx.usuarios.findUnique({
            where: { matricula },
          });

          if (!requisitante) {
            // Lançar um erro aqui dentro fará a transação ser revertida (rollback).
            throw new HTTPError(404, 'Não foi encontrado o requisistante.');
          }

          const operador = await tx.operadores.findUnique({
            where: {
              id: operadorId,
            },
          });

          if (!operador) {
            throw new HTTPError(404, 'Operador não encontrado');
          }

          // Buscamos a chave E verificamos se ela já tem um empréstimo PENDENTE em uma única query.
          const chave = await tx.chave.findUnique({
            where: { id: chaveId },
            include: {
              // Incluímos os empréstimos pendentes. Se o array vier vazio, a chave está livre.
              Emprestimo: {
                where: { status: 'PENDENTE' },
              },
              Ambiente: true,
              Armario: true,
            },
          });

          if (!chave) {
            throw new HTTPError(404, 'Não foi encontrada a chave solicitada.');
          }

          // 3. A verificação agora é feita com os dados que já buscamos dentro da transação anterior de busca de chave.
          if (chave.Emprestimo.length > 0) {
            throw new HTTPError(409, 'Chave já emprestada.');
          }

          if (chave.tipo === 'AMBIENTE') {
            const usuarioAutorizado = await isAuthorized(
              requisitante.id,
              chave.Ambiente!.codigo,
            );

            if (!usuarioAutorizado) {
              throw new HTTPError(
                403,
                'Usuário não autorizado a retirar essa chave.',
              );
            }
          }

          // 4. Se todas as verificações passaram, criamos o empréstimo usando o cliente da transação (tx).
          const novoEmprestimo = await tx.emprestimo.create({
            data: {
              id: uuidv7(),
              dataRetirada: DateTime.now().toISO(), // Certifique-se que DateTime.now() está correto. new Date() também funciona.
              status: 'PENDENTE',
              chaveId: chave.id,
              usuarioSolicitanteId: requisitante.id,
              tipo: 'NORMAL',
              operadorSolicitacaoId: operadorId,
            },
          });

          return novoEmprestimo;
        });
        return reply.send(novoEmprestimo.id).status(204);
      } catch (error) {
        if (error instanceof HTTPError) {
          throw error;
        }

        app.log.fatal(error);
        throw new HTTPError(
          500,
          'Erro interno do servidor ao processar a solicitação de empréstimo',
        );
      }
    },
  });

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/emprestimos/devolucao/:chaveId',
    schema: {
      params: z.object({
        chaveId: z.uuidv7(),
      }),
      body: z.object({
        matricula: z.string().min(7).max(11),
      }),
    },
    preHandler: [AuthenticatedOnly],
    handler: async (req, reply) => {
      const operadorId = req.session?.user.id;
      const { chaveId } = req.params;
      const { matricula } = req.body;

      try {
        // Toda a lógica de leitura e escrita está dentro da transação.
        await database.$transaction(async (tx) => {
          if (!operadorId) {
            throw new HTTPError(400, 'ID do Operador Faltante.');
          }

          const operador = await tx.operadores.findUnique({
            where: {
              id: operadorId,
            },
          });

          if (!operador) {
            throw new HTTPError(404, 'Operador não encontrado');
          }
          // 1. Encontrar o usuário que está devolvendo
          const usuarioDevolucao = await tx.usuarios.findUnique({
            where: { matricula },
          });

          if (!usuarioDevolucao) {
            throw new HTTPError(404, 'Usuário da devolução não encontrado.');
          }

          // 2. Encontrar o EMPRÉSTIMO específico que está PENDENTE para a chave informada.
          // Esta é a única fonte da verdade. Não confiamos em IDs vindos do cliente.
          const emprestimoPendente = await tx.emprestimo.findFirst({
            where: {
              chaveId: chaveId,
              status: 'PENDENTE',
            },
          });

          // Se não houver um empréstimo pendente para esta chave, ela não pode ser devolvida.
          if (!emprestimoPendente) {
            throw new HTTPError(
              404,
              'Não há empréstimo vigente para esta chave.',
            );
          }

          // 3. Atualizar o empréstimo encontrado com TODOS os dados necessários.
          await tx.emprestimo.update({
            where: {
              id: emprestimoPendente.id, // Usamos o ID que encontramos no passo anterior.
            },
            data: {
              status: 'DEVOLVIDO',
              dataRetorno: DateTime.now().toISO(), // Adiciona a data/hora da devolução
              usuarioDevolucaoId: usuarioDevolucao.id, // Adiciona quem devolveu
              operadorDevolucaoId: operadorId, // Operador que efetuou a solicitação
            },
          });
          return;
        });

        // 200 OK com o recurso atualizado, ou 204 No Content. 200 é útil para o front.
        return reply.status(204).send();
      } catch (error) {
        // Se o erro for um HTTPError que nós lançamos, repasse-o.
        if (error instanceof HTTPError) {
          throw error;
        }
        // Para outros erros, log e lança um 500.
        app.log.fatal(error);
        throw new HTTPError(500, 'Erro interno ao processar a devolução.');
      }
    },
  });

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/emprestimos/emprestimo-administrativo',
    schema: {
      body: z
        .object({
          chaveId: z.uuidv7(),
          justificativa: z.string().min(10, 'Justificativa é obrigatória'),
          dataRetirada: z.iso.datetime({
            local: true,
            precision: 3,
            offset: true,
          }),

          status: z.enum(['PENDENTE', 'DEVOLVIDO']),

          dataRetorno: z.iso
            .datetime({
              local: true,
              precision: 3,
              offset: true,
            })
            .optional(),
        })
        .refine(
          (data) => {
            if (data.status === 'DEVOLVIDO' && !data.dataRetorno) return false;
            if (data.status === 'PENDENTE' && data.dataRetorno) return false; // Regra extra: não pode ter data de retorno se está pendente
            return true;
          },
          {
            message: 'Inconsistência entre o status e a data de retorno.',
            path: ['dataRetorno'],
          },
        ),
    },
    preHandler: [AuthenticatedOnly],
    handler: async (req, reply) => {
      const { chaveId, dataRetirada, justificativa, status, dataRetorno } =
        req.body;
      const operadorId = req.session?.user.id;

      try {
        const novoEmprestimoAdministrativo = await database.$transaction(
          async (tx) => {
            if (!operadorId) {
              throw new HTTPError(400, 'ID do Operador Faltante.');
            }

            const operador = await tx.operadores.findUnique({
              where: {
                id: operadorId,
              },
            });

            if (!operador) {
              throw new HTTPError(404, 'Operador não encontrado');
            }

            const chave = await tx.chave.findUnique({
              where: {
                id: chaveId,
              },
            });

            if (!chave) {
              throw new HTTPError(404, 'Chave não encontrada');
            }

            if (status === 'PENDENTE') {
              const emprestimoExistente = await tx.chave.findFirst({
                where: {
                  id: chaveId,
                  Emprestimo: {
                    some: {
                      status: 'PENDENTE',
                    },
                  },
                },
              });
              if (emprestimoExistente) {
                throw new HTTPError(
                  400,
                  'Já existe um empréstimo PENDENTE para essa chave. Não é permitido criar mais um empréstimo para a chave',
                );
              }
            }

            const novoEmprestimo = await tx.emprestimo.create({
              data: {
                id: uuidv7(),
                chaveId: chaveId,
                usuarioSolicitanteId: 'LANCAMENTO_ADMINISTRATIVO',
                usuarioDevolucaoId:
                  status === 'DEVOLVIDO' ? 'LANCAMENTO_ADMINISTRATIVO' : null,
                tipo: 'ADMINISTRATIVO',
                dataRetirada: DateTime.fromISO(dataRetirada).toJSDate(),
                operadorDevolucaoId: status === 'DEVOLVIDO' ? operadorId : null,
                operadorSolicitacaoId: operadorId,
                status: status,
                dataRetorno:
                  status === 'DEVOLVIDO'
                    ? DateTime.fromISO(dataRetorno!).toJSDate()
                    : null,
                justificativa: justificativa,
              },
            });
            return novoEmprestimo;
          },
        );
        reply.status(204).send(novoEmprestimoAdministrativo);
      } catch (error) {
        if (error instanceof HTTPError) {
          throw error;
        }

        app.log.fatal(error);
        throw new HTTPError(
          500,
          'Erro interno do servidor ao criar empréstimo administrativo',
        );
      }
    },
  });
}
