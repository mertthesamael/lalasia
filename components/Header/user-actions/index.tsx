"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Basket } from "@/components/Icons/Basket";
import { Profile } from "@/components/Icons/Profile";
import { handleSignOut } from "@/db/auth";
import { useUserStore } from "@/store/useUserStore";
import { TUser } from "@/types/User";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface HeaderUserActionsProps {
  targetUser?: TUser;
}

const HeaderUserActions: FC<HeaderUserActionsProps> = ({ targetUser }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { user, handleUser } = useUserStore();
  const signOut = async () => {
    let res = await handleSignOut();
    if (res) {
      handleUser(null);
      toast.success("Successfully signed out!");
      router.push("/");
    }
  };

  const getUser = async () => {
    if (!user&&targetUser) {
      handleUser(targetUser);
    }
  };
  useEffect(() => {
    console.log(targetUser);
    getUser();
  }, [targetUser]);

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id !== "profileIcon") {
      return setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <div className={`gap-6 w-40 justify-end hidden lg:flex `}>
      <div className={`flex relative flex-col ${user ? 'flex' : 'hidden'}`}>
        <Link href={"/checkout"}>
          <div className="flex">
            <Basket />
            <h1 className="text-secondaryColor font-bold">
              {user?.basket.length}
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col relative">
        <div
          onClick={() => setIsProfileOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          <Profile />
        </div>
        <div
          className={`bg-white shadow-md p-2 flex flex-col w-max h-max max-h-0 overflow-hidden absolute top-[4.5rem] transition-all ${
            isProfileOpen ? "!max-h-[10rem] " : "!max-h-0 !p-0"
          }`}
        >
          {user ? (
            <div className="flex flex-col gap-3">
              <h1 className="text-primaryColor text-xl font-medium  border-primaryColor">
                {user.displayName.split(' ')[0]}
              </h1>
              <div className="flex flex-col gap-1">
                <Link href={'/orders'} className="text-base text-black">Orders</Link>
                <Link href={'/checkout'} className="text-base text-black">Basket <span className="text-sm">{`(${user.basket.length})`}</span></Link>
              </div>
              <PrimaryButton
                onClick={signOut}
                text="Sign Out"
                className="!bg-secondaryColor !w-max !h-max !py-2"
              />
            </div>
          ) : (
            <>
              <Link
                href={"/auth/signup"}
                className="text-black border rounded-sm p-2"
              >
                Signup
              </Link>
              <Link
                href={"/auth/login"}
                className="text-black border rounded-sm p-2"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderUserActions;
