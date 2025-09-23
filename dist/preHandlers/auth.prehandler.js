import { auth } from '../lib/auth.js';
import { HTTPError } from '../utils/http-error.js';
import { DateTime } from 'luxon';
export default async function AuthenticatedOnly(request) {
    const headers = new Headers();
    Object.entries(request.headers).forEach(([key, value]) => {
        if (value)
            headers.append(key, value.toString());
    });
    const session = await auth.api.getSession({
        headers,
    });
    if (!session) {
        throw new HTTPError(401, 'Não autenticado.');
    }
    const isExpired = DateTime.fromJSDate(session.session.expiresAt).diffNow().toMillis() <= 0;
    if (isExpired) {
        throw new HTTPError(401, 'Sessão expirada.');
    }
    request.session = session;
}
//# sourceMappingURL=auth.prehandler.js.map