"use client";
import React, { FC } from "react";
import { SlideArrow } from "../Icons/SlideArrow";
import PageButton from "../Buttons/PageButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useCreateQueryString from "@/hooks/useQueryString";

interface PaginationProps {
  itemPerView: number;
  totalItems: number;
}

const Pagination: FC<PaginationProps> = ({ itemPerView, totalItems }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();

  const createQueryString = useCreateQueryString();
  return (
    <div className="flex justify-center items-center gap-6 py-6">

      <div>
        {Array(Math.ceil(totalItems / itemPerView))
          .fill(0)
          .map((el, _i) => (
            <PageButton
              key={_i}
              onClick={() => {
                router.push(pathname + "?" + createQueryString("page", _i + 1),{scroll:false});
              }}
              currentPage={
                searchParams.get("page") ? Number(searchParams.get("page")) : 1
              }
              value={_i + 1}
            />
          ))}
      </div>
    </div>
  );
};

export default Pagination;
