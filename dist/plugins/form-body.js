import fp from 'fastify-plugin';
import { fastifyFormbody } from '@fastify/formbody';
export default fp(async (app) => {
    await app.register(fastifyFormbody);
});
//# sourceMappingURL=form-body.js.map