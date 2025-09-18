import { type FastifyInstance } from 'fastify';

export default async function healthcheck(app: FastifyInstance) {
  app.get('/health', async () => {
    return { status: 'ok' };
  });
}
