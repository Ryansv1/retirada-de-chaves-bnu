-- DropForeignKey
ALTER TABLE "public"."emprestimos" DROP CONSTRAINT "emprestimos_operadorId_fkey";

-- AlterTable
ALTER TABLE "public"."emprestimos" ALTER COLUMN "operadorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."emprestimos" ADD CONSTRAINT "emprestimos_operadorId_fkey" FOREIGN KEY ("operadorId") REFERENCES "public"."user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
