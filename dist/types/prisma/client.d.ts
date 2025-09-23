import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Operadores
 * const operadores = await prisma.operadores.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Operadores
 *
 */
export type Operadores = Prisma.OperadoresModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Account
 *
 */
export type Account = Prisma.AccountModel;
/**
 * Model Usuarios
 *
 */
export type Usuarios = Prisma.UsuariosModel;
/**
 * Model Verification
 *
 */
export type Verification = Prisma.VerificationModel;
/**
 * Model Emprestimo
 *
 */
export type Emprestimo = Prisma.EmprestimoModel;
/**
 * Model Chave
 *
 */
export type Chave = Prisma.ChaveModel;
/**
 * Model Chaves_Usuarios
 *
 */
export type Chaves_Usuarios = Prisma.Chaves_UsuariosModel;
/**
 * Model Ambiente
 *
 */
export type Ambiente = Prisma.AmbienteModel;
/**
 * Model Armario
 *
 */
export type Armario = Prisma.ArmarioModel;
//# sourceMappingURL=client.d.ts.map