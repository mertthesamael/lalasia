"use server";

import { prisma } from "@/db/client";
import { TUser } from "@/types/User";

export const orderHandler = async (user: TUser) => {
  if (user && user.basket) {
    try {
      const targetUser = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });
      if (targetUser) {
        const res = await prisma.order.create({
          data: {
            products: user.basket,
            userId: targetUser.id,
            price: targetUser.totalPrice,
          },
        });
        if (res.id) {
          const updatedUser = await prisma.user.update({
            where: {
              email: user.email,
            },
            data: {
              totalPrice: 0,
              basket: [],
            },
          });
          return updatedUser;
        }
        return false;
      }
      return false;
    } catch (err) {
      console.log(err);
    } finally {
      await prisma.$disconnect();
    }
  }
  console.log(user, 123139127813698012738912389012790);
};
