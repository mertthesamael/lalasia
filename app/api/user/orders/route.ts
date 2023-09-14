import { prisma } from "@/db/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { userId } = await request.json();
  try {
    const res = await prisma.order.findMany({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json({ data: res });
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
}
