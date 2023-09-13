"use client";
import React, { FC } from "react";

interface FilterButtonProps {
  text: string;
  activeFilter: string;
  onClick: () => void;
}

const FilterButton: FC<FilterButtonProps> = ({
  text,
  activeFilter,
  onClick,
}) => {
  const isActive = () => {
    return activeFilter.toLocaleLowerCase() === text.toLowerCase();
  };

  // I can use <Link> component for this one. And may create URL with searchParams to initialize filtering fc.
  return (
    <button
      onClick={onClick}
      className={`py-4 px-5 ${
        isActive()
          ? "text-black font-lg font-medium bg-[#F9F9F9]"
          : "text-textColor font-lg font-medium bg-white"
      } min-w-max h-max`}
    >
      {text}
    </button>
  );
};

export default FilterButton;
