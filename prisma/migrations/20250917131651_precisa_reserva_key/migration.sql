/*
  Warnings:

  - Added the required column `bloco` to the `armarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."armarios" ADD COLUMN     "bloco" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."chaves" ADD COLUMN     "precisaReserva" BOOLEAN NOT NULL DEFAULT false;
