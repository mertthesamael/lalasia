import React, { FC } from "react";
import { Logo } from "../Icons/Logo";

interface BrandProps {}

const Brand: FC<BrandProps> = ({}) => {
  return (
    <div className="flex gap-3 items-center w-40">
      <Logo />
      <h1 className="text-black text-2xl font-bold">Lalasia</h1>
    </div>
  );
};

export default Brand;
