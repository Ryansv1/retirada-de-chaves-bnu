import fastifyCors from '@fastify/cors';
import fp from 'fastify-plugin';

export default fp(async (app) => {
  await app.register(fastifyCors, {
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    maxAge: 86400,
  });
});
