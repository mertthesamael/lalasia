import { prisma } from "@/db/client";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { id } = await request.json();
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    console.log(product, "TARGET PRODUCT");

    return NextResponse.json({ data: product });
  } catch (err) {
    return NextResponse.error();
  } finally {
    prisma.$disconnect();
  }
}
