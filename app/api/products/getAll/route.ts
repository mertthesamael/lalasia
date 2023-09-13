import { prisma } from "@/db/client";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json({ data: products });
  } catch (err) {
    return NextResponse.error();
  } finally {
    prisma.$disconnect();
  }
}
export async function POST(request: NextRequest) {
  const { page, perItems, sort } = await request.json();

  const slicer = (itemsPerPage: number, products: any[]) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (startIndex >= products.length) {
      // Return an empty array if the page is out of bounds
      return [];
    }

    // Slice the products array to get the products for the current page
    const pageProducts = products.slice(startIndex, endIndex);

    return pageProducts;
  };
  try {
    const products = await prisma.product.findMany();
    let sorted = products;
    if (sort === "pricelow") {
      sorted = products.sort((a, b) => a.price - b.price);
    } else if (sort === "pricehigh") {
      sorted = products.sort((a, b) => b.price - a.price);
    }
    const res = slicer(perItems, products);
    return NextResponse.json({ data: res, size: products.length });
  } catch (err) {
    return NextResponse.error();
  } finally {
    prisma.$disconnect();
  }
}
