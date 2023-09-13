"use client";
import { Sort } from "@/components/Icons/Sort";
import useCreateQueryString from "@/hooks/useQueryString";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FC, useCallback, useState } from "react";

interface SortDropDownProps {}

const SortDropDown: FC<SortDropDownProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCreateQueryString();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative px-10">
      <div
        className="flex gap-6 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Sort />
        <span className="text-black text-lg">Sort By</span>
      </div>
      <div
        className={`absolute transition-all overflow-hidden top-full bg-white flex flex-col max-h-0 gap-4 p-4 ${
          isOpen ? "!p-4 !max-h-[20rem]" : "!p-0 !max-h-0"
        }`}
      >
        <h1
          className="text-sm text-black cursor-pointer"
          onClick={() => {
            setIsOpen(false);
            router.push(pathname + "?" + createQueryString("sort", "pricelow"));
          }}
        >
          Price Low to High
        </h1>
        <h1
          className="text-sm text-black cursor-pointer"
          onClick={() => {
            setIsOpen(false);
            router.push(
              pathname + "?" + createQueryString("sort", "pricehigh")
            );
          }}
        >
          Price High to Low
        </h1>
      </div>
    </div>
  );
};

export default SortDropDown;
