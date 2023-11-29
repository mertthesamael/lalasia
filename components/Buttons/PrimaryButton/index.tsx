"use client";
import Spinner from "@/components/Loaders/Spinner";
import React, { FC } from "react";
import { useFormStatus } from "react-dom";

interface PrimaryButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  className,
  type,
  onClick,
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-primaryColor flex justify-center items-center w-[130px] p-2 md:p-4 md:w-[170px] md:h-[52px] text-sm md:text-md text-white ${className} `}
    >
      {pending ? <Spinner></Spinner> : text}
    </button>
  );
};

export default PrimaryButton;
