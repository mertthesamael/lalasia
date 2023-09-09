-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "colors" "Color"[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "basket" JSONB[];
