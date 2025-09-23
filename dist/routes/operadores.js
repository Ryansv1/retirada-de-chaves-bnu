import { database } from '../lib/prisma.js';
import { HTTPError } from '../utils/http-error.js';
import z from 'zod';
export default async function Operadores(app) {
    app.withTypeProvider().route({
        method: 'GET',
        url: '/operadores',
        handler: async (_, reply) => {
            try {
                const operadores = await database.operadores.findMany({
                    select: {
                        email: true,
                        id: true,
                        name: true,
                    },
                });
                return reply.status(200).send(operadores);
            }
            catch (error) {
                throw new HTTPError(500, 'Erro interno ao buscar operadores,');
            }
        },
    });
    app.withTypeProvider().route({
        method: 'DELETE',
        url: '/operadores/:operadorId',
        schema: {
            params: z.object({
                operadorId: z.string().nonempty(),
            }),
        },
        handler: async (req, reply) => {
            try {
                await database.operadores.delete({
                    where: {
                        id: req.params.operadorId,
                    },
                });
                return reply.status(204);
            }
            catch (error) {
                throw new HTTPError(500, 'Erro interno do servidor ao deletar o operador');
            }
        },
    });
}
//# sourceMappingURL=operadores.js.map