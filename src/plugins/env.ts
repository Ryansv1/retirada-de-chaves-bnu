import fp from 'fastify-plugin';
import z from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  HOST: z.string().default('0.0.0.0'),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.url(),
  API_SECRET: z.string().min(16),
  BETTER_AUTH_SECRET: z.string().min(16),
  BETTER_AUTH_URL: z.url(),
  CLIENT_URL: z.url(),
});

export default fp(async (app) => {
  const parsed = envSchema.parse(process.env);

  app.decorate('config', parsed);
});

export type Config = z.infer<typeof envSchema>;
