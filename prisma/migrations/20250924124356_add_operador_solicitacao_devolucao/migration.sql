/*
  Warnings:

  - You are about to drop the column `operadorId` on the `emprestimos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."emprestimos" DROP CONSTRAINT "emprestimos_operadorId_fkey";

-- DropIndex
DROP INDEX "public"."emprestimos_operadorId_idx";

-- AlterTable
ALTER TABLE "public"."emprestimos" DROP COLUMN "operadorId",
ADD COLUMN     "operadorDevolucaoId" TEXT,
ADD COLUMN     "operadorSolicitacaoId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."emprestimos" ADD CONSTRAINT "emprestimos_operadorSolicitacaoId_fkey" FOREIGN KEY ("operadorSolicitacaoId") REFERENCES "public"."operadores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."emprestimos" ADD CONSTRAINT "emprestimos_operadorDevolucaoId_fkey" FOREIGN KEY ("operadorDevolucaoId") REFERENCES "public"."operadores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
