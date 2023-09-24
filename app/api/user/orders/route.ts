import { prisma } from "@/db/client";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) : Promise<any> {
  const { userMail } = await request.json();
  const tag = request.nextUrl.searchParams.get('orders')
  tag&&revalidateTag(tag)
  try {
    const res = await prisma.order.findMany({
      where: {
        userMail:userMail
      },
    });

    return NextResponse.json({ data: res,revalidated:true });
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
}
