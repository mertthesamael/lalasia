"use client";

import { CloseIcon } from "@/components/Icons/Close";
import { HamburgerIcon } from "@/components/Icons/HamburgerIcon";
import { useLayoutStore } from "@/store/useLayoutStore";
import React, { FC } from "react";

interface HamburgerButtonProps {}

const HamburgerButton: FC<HamburgerButtonProps> = ({}) => {
  const { mobileOpen, handleMobileOpen } = useLayoutStore();
  return (
    <div
      className="cursor-pointer"
      onClick={() => handleMobileOpen(!mobileOpen)}
    >
      {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
    </div>
  );
};

export default HamburgerButton;
