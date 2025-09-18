/*
  Warnings:

  - A unique constraint covering the columns `[matricula]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "usuarios_matricula_key" ON "public"."usuarios"("matricula");
