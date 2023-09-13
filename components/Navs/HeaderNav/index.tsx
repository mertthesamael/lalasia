"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";

interface HeaderNavProps {
  value: string;
  href: string;
  id: number;
}

const HeaderNav: FC<HeaderNavProps> = ({ value, href }) => {
  const route: string = usePathname();
  return (
    <div className=" h-full w-max relative">
      <Link href={href} className="text-black font-medium">
        {value}
      </Link>
      <div
        className="bg-primaryColor absolute w-full h-1 top-[62px]"
        style={href === route ? { display: "flex" } : { display: "none" }}
      />
    </div>
  );
};

export default HeaderNav;
