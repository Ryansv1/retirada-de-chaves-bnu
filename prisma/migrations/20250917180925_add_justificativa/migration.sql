-- AlterTable
ALTER TABLE "public"."emprestimos" ADD COLUMN     "justificativa" TEXT,
ALTER COLUMN "tipo" SET DEFAULT 'NORMAL';
