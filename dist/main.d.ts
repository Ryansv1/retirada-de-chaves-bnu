import { type Config } from './plugins/env.js';
declare module 'fastify' {
    interface FastifyInstance {
        config: Config;
    }
}
export declare function AppFactory(): Promise<void>;
//# sourceMappingURL=main.d.ts.map