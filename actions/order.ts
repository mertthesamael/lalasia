"use server";

import { prisma } from "@/db/client";
import { postBasket } from "@/libs/endpoints";
import { TUser } from "@/types/User";
import axios from "axios";
import { revalidateTag } from "next/cache";

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
            userMail:targetUser.email,
            price: targetUser.totalPrice,
            date: new Date()
          },
        });
        if (res.id) {
          try{

              const { data } = await axios.post(postBasket, {
                action: "wipe",
                user: user,
              });
              revalidateTag('orders')
            
            return data.result;
          }catch(err){
            console.log(err)
          }finally{
            await prisma.$disconnect()
          }
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

};
