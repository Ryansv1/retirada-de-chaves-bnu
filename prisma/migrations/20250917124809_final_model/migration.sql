/*
  Warnings:

  - You are about to drop the column `chaveId` on the `armarios` table. All the data in the column will be lost.
  - You are about to drop the column `isDisponivel` on the `chaves` table. All the data in the column will be lost.
  - Added the required column `tipo` to the `chaves` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TipoChave" AS ENUM ('ARMARIO', 'AMBIENTE');

-- DropForeignKey
ALTER TABLE "public"."armarios" DROP CONSTRAINT "armarios_chaveId_fkey";

-- AlterTable
ALTER TABLE "public"."armarios" DROP COLUMN "chaveId";

-- AlterTable
ALTER TABLE "public"."chaves" DROP COLUMN "isDisponivel",
ADD COLUMN     "tipo" "public"."TipoChave" NOT NULL,
ALTER COLUMN "ambienteId" DROP NOT NULL,
ALTER COLUMN "armarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."chaves" ADD CONSTRAINT "chaves_ambienteId_fkey" FOREIGN KEY ("ambienteId") REFERENCES "public"."ambientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chaves" ADD CONSTRAINT "chaves_armarioId_fkey" FOREIGN KEY ("armarioId") REFERENCES "public"."armarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
