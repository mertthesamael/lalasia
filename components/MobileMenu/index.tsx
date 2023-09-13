"use client";
import React, { FC } from "react";
import Brand from "../Brand";
import HamburgerButton from "../Buttons/HamburgerButton";
import { useLayoutStore } from "@/store/useLayoutStore";
import { HeaderNavs } from "../Header/constants";
import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";
import PrimaryButton from "../Buttons/PrimaryButton";
import { handleSignOut } from "@/db/auth";
import { Basket } from "../Icons/Basket";

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = ({}) => {
  const { mobileOpen, handleMobileOpen } = useLayoutStore();
  const { user, handleUser } = useUserStore();
  return (
    <div
      className={`w-screen h-full bg-white z-20 py-4 px-5 fixed top-0 lg:hidden flex flex-col ${
        mobileOpen ? "" : "!hidden"
      }`}
    >
      <div className="h-full">
        <div className="flex justify-between items-center">
          <Brand />
          <HamburgerButton />
        </div>
        <div className="flex flex-col h-full py-32 px-2">
          <ul className="flex h-full justify-between items-center flex-col">
            {HeaderNavs.map((el, _i) => (
              <li key={_i}>
                <Link
                  onClick={() => handleMobileOpen(false)}
                  href={el.href}
                  className="text-black text-lg font-bold"
                >
                  {el.value}
                </Link>
              </li>
            ))}
            {!user ? (
              <li>
                <Link
                  onClick={() => handleMobileOpen(false)}
                  href={"/auth/login"}
                  className="text-black text-lg font-bold"
                >
                  Login
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href={"/checkout"}
                    className="text-black text-lg font-bold flex gap-4"
                  >
                    Basket{" "}
                    <span className="flex text-secondaryColor">
                      <Basket />
                      {user.basket.length}
                    </span>
                  </Link>
                </li>
                <PrimaryButton
                  text="Signout"
                  onClick={() => {
                    handleSignOut();
                    handleUser(null);
                  }}
                />
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
