/*
  Warnings:

  - You are about to drop the `movie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "movie";

-- CreateTable
CREATE TABLE "Serie" (
    "id" SERIAL NOT NULL,
    "id_content" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "actors" TEXT NOT NULL,
    "producer" TEXT NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Serie_id_content_key" ON "Serie"("id_content");
