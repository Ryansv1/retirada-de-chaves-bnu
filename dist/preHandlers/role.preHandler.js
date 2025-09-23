import { HTTPError } from '../utils/http-error.js';
export default async function AdminOnly(request) {
    const session = request.session;
    if (session.user.role !== 'ADMIN') {
        throw new HTTPError(403, 'Você não tem permissão para acessar esse recurso');
    }
    return request;
}
//# sourceMappingURL=role.preHandler.js.map