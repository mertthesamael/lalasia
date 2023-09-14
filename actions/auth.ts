"use server";

import { prisma } from "@/db/client";
import { TUser } from "@/types/User";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";

  // Make sure to include https:// when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing /.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};

export const loginHandler = async (formData: FormData) => {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient({ cookies });
  let user: TUser = null;
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
    revalidateTag('orders')

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
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const name = String(formData.get("name"));
  const supabase = createRouteHandlerClient({ cookies });

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${getURL()}auth/callback`,
      },
    });
    if (data?.user) {
      const newUser = await prisma.user.create({
        data: {
          displayName: String(name),
          email: String(email),
          totalPrice: 0,
        },
      });
    }
    revalidateTag('orders')

    return {
      data: data,
      error: error,
    };
  } catch (err) {
    console.log(err, "2313213123");
    return {
      fail:true
    };
  } finally {
    prisma.$disconnect();
  }
};
