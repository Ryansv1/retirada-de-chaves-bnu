export default async function healthcheck(app) {
    app.get('/health', async () => {
        return { status: 'ok' };
    });
}
//# sourceMappingURL=healthcheck.js.map