import 'fastify';
import { Session } from '../src/lib/auth.ts';

declare module 'fastify' {
  interface FastifyRequest {
    session?: Session;
  }
}
