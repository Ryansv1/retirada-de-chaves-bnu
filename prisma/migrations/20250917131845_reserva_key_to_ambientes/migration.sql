/*
  Warnings:

  - You are about to drop the column `precisaReserva` on the `chaves` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."ambientes" ADD COLUMN     "precisaReserva" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."chaves" DROP COLUMN "precisaReserva";
