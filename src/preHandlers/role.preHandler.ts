import { FastifyRequest } from 'fastify';
import { HTTPError } from '../utils/http-error.js';

export default async function AdminOnly(request: FastifyRequest) {
  const session = request.session!;

  if (session.user.role !== 'ADMIN') {
    throw new HTTPError(
      403,
      'Você não tem permissão para acessar esse recurso',
    );
  }

  return request;
}
