import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const ModelName: {
    readonly Operadores: "Operadores";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Usuarios: "Usuarios";
    readonly Verification: "Verification";
    readonly Emprestimo: "Emprestimo";
    readonly Chave: "Chave";
    readonly Chaves_Usuarios: "Chaves_Usuarios";
    readonly Ambiente: "Ambiente";
    readonly Armario: "Armario";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OperadoresScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly role: "role";
};
export type OperadoresScalarFieldEnum = (typeof OperadoresScalarFieldEnum)[keyof typeof OperadoresScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly userId: "userId";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const UsuariosScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly matricula: "matricula";
};
export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const EmprestimoScalarFieldEnum: {
    readonly id: "id";
    readonly chaveId: "chaveId";
    readonly usuarioSolicitanteId: "usuarioSolicitanteId";
    readonly usuarioDevolucaoId: "usuarioDevolucaoId";
    readonly operadorId: "operadorId";
    readonly dataRetirada: "dataRetirada";
    readonly dataRetorno: "dataRetorno";
    readonly status: "status";
    readonly tipo: "tipo";
    readonly justificativa: "justificativa";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EmprestimoScalarFieldEnum = (typeof EmprestimoScalarFieldEnum)[keyof typeof EmprestimoScalarFieldEnum];
export declare const ChaveScalarFieldEnum: {
    readonly id: "id";
    readonly ambienteId: "ambienteId";
    readonly armarioId: "armarioId";
    readonly tipo: "tipo";
};
export type ChaveScalarFieldEnum = (typeof ChaveScalarFieldEnum)[keyof typeof ChaveScalarFieldEnum];
export declare const Chaves_UsuariosScalarFieldEnum: {
    readonly id: "id";
    readonly chaveId: "chaveId";
    readonly usuarioId: "usuarioId";
};
export type Chaves_UsuariosScalarFieldEnum = (typeof Chaves_UsuariosScalarFieldEnum)[keyof typeof Chaves_UsuariosScalarFieldEnum];
export declare const AmbienteScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nome: "nome";
    readonly capacidade: "capacidade";
    readonly localizacao: "localizacao";
    readonly tipo: "tipo";
    readonly precisaReserva: "precisaReserva";
};
export type AmbienteScalarFieldEnum = (typeof AmbienteScalarFieldEnum)[keyof typeof AmbienteScalarFieldEnum];
export declare const ArmarioScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly localizacao: "localizacao";
    readonly bloco: "bloco";
    readonly andar: "andar";
};
export type ArmarioScalarFieldEnum = (typeof ArmarioScalarFieldEnum)[keyof typeof ArmarioScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map