/*
  Warnings:

  - Added the required column `operadorId` to the `emprestimos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `emprestimos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TipoEmprestimo" AS ENUM ('ADMINISTRATIVO', 'NORMAL');

-- AlterTable
ALTER TABLE "public"."emprestimos" ADD COLUMN     "operadorId" TEXT NOT NULL,
ADD COLUMN     "tipo" "public"."TipoEmprestimo" NOT NULL;

-- CreateIndex
CREATE INDEX "emprestimos_operadorId_idx" ON "public"."emprestimos"("operadorId");

-- AddForeignKey
ALTER TABLE "public"."emprestimos" ADD CONSTRAINT "emprestimos_operadorId_fkey" FOREIGN KEY ("operadorId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
