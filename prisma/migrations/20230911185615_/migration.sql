/*
  Warnings:

  - You are about to drop the `BasketItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_userId_fkey";

-- DropTable
DROP TABLE "BasketItem";
