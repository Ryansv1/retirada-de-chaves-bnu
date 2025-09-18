import { FastifyReply, FastifyRequest } from 'fastify';
import { auth } from '../lib/auth.js';
import { HTTPError } from '../utils/http-error.js';

export default async function AuthPreHandler(request: FastifyRequest) {
  const headers = new Headers();
  Object.entries(request.headers).forEach(([key, value]) => {
    if (value) headers.append(key, value.toString());
  });
  const isAuthenticated = await auth.api.getSession({
    headers,
  });

  if (!isAuthenticated) {
    throw new HTTPError(401, 'Não autenticado.');
  }

  request.user = isAuthenticated.user;
}
