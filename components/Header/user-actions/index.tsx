"use client";
import { Basket } from "@/components/Icons/Basket";
import { Profile } from "@/components/Icons/Profile";
import { useUserStore } from "@/store/useUserStore";
import { TUser } from "@/types/User";
import Link from "next/link";
import React, { FC, useEffect } from "react";

interface HeaderUserActionsProps {
  targetUser: TUser;
}

const HeaderUserActions: FC<HeaderUserActionsProps> = ({ targetUser }) => {
  const { user, handleUser } = useUserStore();
  const getUser = () => {
    if (!user) {
      handleUser(targetUser);
    }
  };
  useEffect(() => {
    getUser();
  }, [targetUser]);
  return (
    <div className="gap-6 w-40 justify-end hidden lg:flex">
      <Basket />
      <Link href={"/auth/login"}>
        <Profile />
      </Link>
    </div>
  );
};

export default HeaderUserActions;
