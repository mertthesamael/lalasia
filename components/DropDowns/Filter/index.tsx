import { Filter } from "@/components/Icons/Filter";
import React, { FC } from "react";

interface FilterDropdownProps {}

const FilterDropdown: FC<FilterDropdownProps> = ({}) => {
  return (
    <div className="h-[84px] w-[190px] grid place-items-center relative cursor-pointer">
      <div className="w-full h-full flex gap-3 items-center justify-center shadow-[0_4px_120px_0px_rgba(175,173,181,0.3)]">
        <Filter />
        <span className="text-black text-lg font-medium">Filter</span>
      </div>
    </div>
  );
};

export default FilterDropdown;
