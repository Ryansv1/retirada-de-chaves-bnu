import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { database } from './prisma.js';
import bcrypt from 'bcryptjs';

export const auth = betterAuth({
  appName: 'Retirada de Chaves',
  trustedOrigins: [process.env.BETTER_AUTH_URL!, 'http://localhost'],
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_BASE_URL!,
  database: prismaAdapter(database, {
    provider: 'postgresql',
  }),
  session: {
    expiresIn: 60 * 60 * 60 * 8,
  },
  user: {
    modelName: 'operadores',
  },
  emailAndPassword: {
    enabled: true,
    password: {
      hash: async (input: string) => await bcrypt.hash(input, 10),
      verify: async ({ hash, password }) => {
        const isValid = await bcrypt.compare(password, hash);
        return isValid;
      },
    },
  },
});
