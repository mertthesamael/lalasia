/*
  Warnings:

  - Added the required column `userMail` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "userMail" TEXT NOT NULL;
