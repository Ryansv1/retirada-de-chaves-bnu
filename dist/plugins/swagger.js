import swagger from '@fastify/swagger';
import fp from 'fastify-plugin';
import { jsonSchemaTransform } from 'fastify-type-provider-zod';
export default fp(async (app) => {
    await app.register(swagger, {
        openapi: {
            info: {
                title: 'Retirada de Chaves API',
                description: 'API documentation',
                version: '1.0.0',
            },
            servers: [],
        },
        transform: jsonSchemaTransform,
    });
});
//# sourceMappingURL=swagger.js.map