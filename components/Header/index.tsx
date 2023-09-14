import React, { FC } from "react";
import Link from "next/link";
import { HamburgerIcon } from "../Icons/HamburgerIcon";
import { HeaderNavs } from "./constants";
import Brand from "../Brand";
import HeaderNav from "../Navs/HeaderNav";
import { User } from "@supabase/auth-helpers-nextjs";
import HeaderUserActions from "./user-actions";
import { prisma } from "@/db/client";
import HamburgerButton from "../Buttons/HamburgerButton";

interface HeaderProps {
  user: User | null;
}

const Header: FC<HeaderProps> = async ({ user }) => {
  const checkUser = async () => {
    let targetUser = null;

    if (user) {
      try {
        targetUser = await prisma.user.findUnique({
          where: {
            email: String(user.email),
          },
        });
        return targetUser;
      } catch (err) {
        console.log(err, " user error");
      } finally {
        prisma.$disconnect();
      }
    }
  };
  const targetUser = await checkUser();
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
          <HamburgerButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
