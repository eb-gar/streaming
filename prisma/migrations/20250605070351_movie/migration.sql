/*
  Warnings:

  - You are about to drop the `content` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "content";

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "id_content" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "actors" TEXT NOT NULL,
    "producer" TEXT NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_id_content_key" ON "movie"("id_content");
