/*
  Warnings:

  - Added the required column `andar` to the `armarios` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `localizacao` on the `armarios` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."armarios" ADD COLUMN     "andar" TEXT NOT NULL,
DROP COLUMN "localizacao",
ADD COLUMN     "localizacao" "public"."Localizacao" NOT NULL;
