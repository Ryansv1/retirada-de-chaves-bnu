import Fastify from 'fastify';
import env, { type Config } from './plugins/env.js';
import helmet from './plugins/helmet.js';
import scalar from './plugins/scalar.js';
import swagger from './plugins/swagger.js';
import rateLimit from './plugins/rate-limit.js';
import multipart from './plugins/multipart.js';
import cors from './plugins/cors.js';

import { HTTPErrorHandler } from './utils/http.js';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';

import healthcheck from './routes/healthcheck.js';
import Emprestimos from './routes/emprestimos.js';
import Chaves from './routes/chaves.js';
import Authentication from './routes/auth.js';
import Usuarios from './routes/usuarios.js';

declare module 'fastify' {
  interface FastifyInstance {
    config: Config;
  }
}

export async function AppFactory() {
  const app = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  });

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);
  app.withTypeProvider<ZodTypeProvider>();
  app.setErrorHandler(async function (err, request, reply) {
    await HTTPErrorHandler(this, err, request, reply);
  });

  app.register(env);
  app.register(cors);
  app.register(helmet);
  app.register(swagger);
  app.register(scalar);
  app.register(multipart);
  app.register(rateLimit);

  app.register(Authentication, { prefix: '/api/v1' });
  app.register(Usuarios, { prefix: '/api/v1' });
  app.register(healthcheck, { prefix: '/api/v1' });
  app.register(Emprestimos, { prefix: '/api/v1' });
  app.register(Chaves, { prefix: '/api/v1' });

  await app.ready();

  try {
    await app.listen({ port: Number(app.config.PORT) });
    app.log.info(app.printPlugins());
    app.log.info(app.printRoutes());
  } catch (err) {
    app.log.fatal(err);
    process.exit(1);
  }
}

AppFactory();
