import { prisma } from "@/db/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) : Promise<any> {
  const { action, payload, user, item } = await request.json();

  if (action === "add") {
    try {
      if (user) {
        const updatedUser = await prisma.user.update({
          where: {
            email: user.email,
          },
          data: {
            basket: [...user.basket, payload],
          },
        });

        const result = await prisma.user.update({
          where: {
            email: user.email,
          },
          data: {
            totalPrice: Number(
              updatedUser.basket.reduce(
                (acc, curr: any) => acc + curr.item.price,
                0
              )
            ),
          },
        });
        return NextResponse.json({ data: "added", result: result });
      }
    } catch (err) {
      console.log(err);
    } finally {
      prisma.$disconnect();
    }
  } else if (action === "remove") {
    if (user) {
      const newBasket = user.basket.filter((el: any) => el.id !== item.id);
      const updatedUser = await prisma.user.update({
        where: {
          email: user.email,
        },
        data: {
          basket: newBasket,
        },
      });
      const result = await prisma.user.update({
        where: {
          email: user.email,
        },
        data: {
          totalPrice: updatedUser.totalPrice - item.item.price,
        },
      });
      return NextResponse.json({ data: "added", result: result });
    }
    return NextResponse.json({ data: "removed" }, { status: 500 });
  } else if (action === "wipe") {
    if (user) {
      const result = await prisma.user.update({
        where: {
          email: user.email,
        },
        data: {
          totalPrice: 0,
          basket: [],
        },
      });
      return NextResponse.json({ data: "added", result: result });
    }
    return NextResponse.json({ data: "removed" }, { status: 500 });
  }
}
