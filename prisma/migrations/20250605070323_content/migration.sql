-- CreateTable
CREATE TABLE "content" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "content_pkey" PRIMARY KEY ("id")
);
