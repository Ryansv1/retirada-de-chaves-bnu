import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { database } from './prisma.js';
import bcrypt from 'bcryptjs';
import { v7 as uuidv7 } from 'uuid';

const isProd = process.env.NODE_ENV === 'production';

export const auth = betterAuth({
  appName: 'Retirada de Chaves',
  trustedOrigins: [
    process.env.BETTER_AUTH_URL!,
    process.env.CLIENT_URL!,
    process.env.ADMIN_URL!,
  ],
  basePath: 'api/v1/auth',
  secret: process.env.BETTER_AUTH_SECRET!,
  database: prismaAdapter(database, {
    provider: 'postgresql',
  }),
  advanced: {
    database: {
      generateId: () => {
        const id = uuidv7();
        return id;
      },
    },
    cookies: {
      session_token: {
        name: 'session_token',
        attributes: {
          httpOnly: true,
          secure: isProd ? true : false,
        },
      },
    },
  },
  session: {
    expiresIn: 60 * 60 * 60 * 8,
  },
  user: {
    modelName: 'operadores',
    additionalFields: {
      role: {
        fieldName: 'role',
        type: 'string',
        required: true,
        defaultValue: 'ADMIN',
        input: false, // don't allow user to set role
      },
    },
  },
  emailAndPassword: {
    autoSignIn: false,
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

export type Session = typeof auth.$Infer.Session;
