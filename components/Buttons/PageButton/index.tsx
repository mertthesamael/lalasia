import React, { FC } from "react";

interface PageButtonProps {
  currentPage: number;
  value: number;
  onClick: () => void;
}

const PageButton: FC<PageButtonProps> = ({ currentPage, value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[38px] h-[42px] ${
        currentPage === value ? "bg-primaryColor" : "bg-white border-2"
      } `}
    >
      <span
        className={`text-lg ${
          currentPage === value ? "text-white" : "text-black"
        }`}
      >
        {value}
      </span>
    </button>
  );
};

export default PageButton;
