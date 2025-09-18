-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('PENDENTE', 'DEVOLVIDO');

-- CreateEnum
CREATE TYPE "public"."TipoAmbiente" AS ENUM ('LABORATORIO', 'SALA_DE_AULA', 'SALA_ADMINISTRATIVA', 'AUDITORIO');

-- CreateEnum
CREATE TYPE "public"."Localizacao" AS ENUM ('SNO', 'VELHA');

-- CreateTable
CREATE TABLE "public"."usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."emprestimos" (
    "id" TEXT NOT NULL,
    "chaveId" TEXT NOT NULL,
    "usuarioSolicitanteId" TEXT NOT NULL,
    "usuarioDevolucaoId" TEXT,
    "dataRetirada" TIMESTAMP(3) NOT NULL,
    "dataRetorno" TIMESTAMP(3),
    "status" "public"."Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "emprestimos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."chaves" (
    "id" TEXT NOT NULL,
    "ambienteId" TEXT NOT NULL,
    "armarioId" TEXT NOT NULL,
    "isDisponivel" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "chaves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."chaves_usuarios" (
    "id" TEXT NOT NULL,
    "chaveId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "chaves_usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ambientes" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "localizacao" "public"."Localizacao" NOT NULL,
    "tipo" "public"."TipoAmbiente" NOT NULL,

    CONSTRAINT "ambientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."armarios" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "chaveId" TEXT,

    CONSTRAINT "armarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "emprestimos_chaveId_idx" ON "public"."emprestimos"("chaveId");

-- CreateIndex
CREATE INDEX "emprestimos_usuarioDevolucaoId_idx" ON "public"."emprestimos"("usuarioDevolucaoId");

-- CreateIndex
CREATE INDEX "emprestimos_usuarioSolicitanteId_idx" ON "public"."emprestimos"("usuarioSolicitanteId");

-- CreateIndex
CREATE UNIQUE INDEX "chaves_ambienteId_key" ON "public"."chaves"("ambienteId");

-- CreateIndex
CREATE UNIQUE INDEX "chaves_armarioId_key" ON "public"."chaves"("armarioId");

-- CreateIndex
CREATE UNIQUE INDEX "ambientes_codigo_localizacao_key" ON "public"."ambientes"("codigo", "localizacao");

-- AddForeignKey
ALTER TABLE "public"."emprestimos" ADD CONSTRAINT "emprestimos_chaveId_fkey" FOREIGN KEY ("chaveId") REFERENCES "public"."chaves"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."emprestimos" ADD CONSTRAINT "emprestimos_usuarioSolicitanteId_fkey" FOREIGN KEY ("usuarioSolicitanteId") REFERENCES "public"."usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."emprestimos" ADD CONSTRAINT "emprestimos_usuarioDevolucaoId_fkey" FOREIGN KEY ("usuarioDevolucaoId") REFERENCES "public"."usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chaves_usuarios" ADD CONSTRAINT "chaves_usuarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chaves_usuarios" ADD CONSTRAINT "chaves_usuarios_chaveId_fkey" FOREIGN KEY ("chaveId") REFERENCES "public"."chaves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."armarios" ADD CONSTRAINT "armarios_chaveId_fkey" FOREIGN KEY ("chaveId") REFERENCES "public"."chaves"("id") ON DELETE SET NULL ON UPDATE CASCADE;
