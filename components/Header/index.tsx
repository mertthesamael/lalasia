import React, { FC } from "react";
import Link from "next/link";
import { HamburgerIcon } from "../Icons/HamburgerIcon";
import { HeaderNavs } from "./constants";
import Brand from "../Brand";
import HeaderNav from "../Navs/HeaderNav";
import {
  createRouteHandlerClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import HeaderUserActions from "./user-actions";
import { prisma } from "@/db/client";

interface HeaderProps {}

const Header: FC<HeaderProps> = async ({}) => {
  const supabase = createRouteHandlerClient({ cookies });

  let { data, error } = await supabase.auth.getSession();
  let targetUser = null;
  try {
    targetUser = await prisma.user.findUnique({
      where: {
        email: data.session?.user.email,
      },
    });
  } catch (err) {
    console.log(err);
  } finally {
    prisma.$disconnect();
  }

  return (
    <header className="w-full flex justify-center py-4 md:py-8 border-b-2 border-[#F3F3F3] relative">
      <div className="w-full max-w-screen-xl mx-5 md:mx-20 flex items-center justify-between">
        <Link href={"/"}>
          <Brand />
        </Link>
        <nav className=" gap-14 hidden lg:flex">
          {HeaderNavs.map((el, _i) => (
            <HeaderNav key={_i} value={el.value} id={el.id} href={el.href} />
          ))}
        </nav>
        <HeaderUserActions targetUser={targetUser} />
        <div className="flex lg:hidden">
          <HamburgerIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
