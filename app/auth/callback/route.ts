import { PrismaClient } from "@prisma/client";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const prisma = new PrismaClient();
  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    const { data } = await supabase.auth.exchangeCodeForSession(code);
    console.log(data.session?.user, "USER DATA IS HEREEEEEEE!!!!!!");
    try {
      await prisma.user.create({
        data: {
          displayName: data.session?.user.user_metadata.full_name ?? "Merto",
          email: String(data.session?.user.email),
          totalPrice: 0,
        },
      });
    } catch (err) {
      console.log(err, "OOOPPPSS BACKEND ERROR HERE !!!");
    } finally {
      prisma.$disconnect();
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
