import { FastifyInstance } from 'fastify';
import { auth } from '../lib/auth.js';

export default async function Authentication(app: FastifyInstance) {
  app.route({
    method: ['GET', 'POST'],
    url: '/auth/*',
    async handler(request, reply) {
      try {
        // Construct request URL
        const url = new URL(request.url, `http://${request.headers.host}`);

        // Convert Fastify headers to standard Headers object
        const headers = new Headers();
        Object.entries(request.headers).forEach(([key, value]) => {
          if (value) headers.append(key, value.toString());
        });
        // Create Fetch API-compatible request
        const requestInit: RequestInit = {
          method: request.method,
          headers,
        };
        if (request.body) {
          requestInit.body = JSON.stringify(request.body);
        }
        const req = new Request(url.toString(), requestInit);
        // Process authentication request
        const response = await auth.handler(req);
        // Forward response to client
        reply.status(response.status);
        response.headers.forEach((value, key) => reply.header(key, value));
        reply.send(response.body ? await response.text() : null);
      } catch (error) {
        reply.status(500).send({
          error: 'Internal authentication error',
          code: 'AUTH_FAILURE',
        });
      }
    },
  });
}
