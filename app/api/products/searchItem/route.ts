import { prisma } from "@/db/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { key } = await request.json();

  try {
    const products = await prisma.product.findMany();
    let result = [];
    const searchValue: string = key.toLowerCase();
    for (let product of products) {
      if (
        Object.values(product).includes(
          searchValue.charAt(0).toUpperCase() + searchValue.slice(1)
        )
      ) {
        result.push(product);
      }
    }

    return NextResponse.json({ data: result });
  } catch (err) {
    return NextResponse.error();
  } finally {
    prisma.$disconnect();
  }
}
