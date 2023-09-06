"use server";

import { prisma } from "@/db/client";
import { TUser } from "@/types/User";
import { PrismaClient } from "@prisma/client";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import axios from "axios";
import { cookies } from "next/headers";


export const loginHandler = async (formData: FormData) => {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient({ cookies });
  let user : TUser = null;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data.user) {
      const targetUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      user = targetUser;
    }
    return {
      error: error?.message,
      data: data,
      user: user,
    };
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
};

export const signupHandler = async (formData: FormData) => {
  const requestUrl = new URL("http://localhost:3000/callback");
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient({ cookies });

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${requestUrl}`,
      },
    });
    if (data?.user) {
      const newUser = await prisma.user.create({
        data: {
          displayName: "Merto",
          email: String(email),
        },
      });
    }
    return {
      data: data,
      error: error,
    };
  } catch (err) {
  } finally {
    prisma.$disconnect();
  }
};
