import Image from "next/image";
import React, { FC } from "react";

interface ResponsiveCardProps {}

const ResponsiveCard: FC<ResponsiveCardProps> = ({}) => {
  return (
    <div className="w-full h-full relative flex items-end">
      <Image
        src={"/article.png"}
        fill
        style={{ objectFit: "cover" }}
        alt="Lalasia"
      />
      <div className="linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) bg-gradient-to-t from-[#15141175] to-[transparent] absolute w-full h-full" />
      <div className="relative p-7 flex flex-col gap-4">
        <div className="flex flex-col">
          <div>
            <h2 className="font-bold text-base md:text-2xl">
              Siska Kohl&apos;s Bedroom
            </h2>
            <p className="text-white opacity-[0.7] text-ellipsis text-sm md:text-lg">
              We start renovating her bedroom with minimalist concept and using
              combination white and wooden material
            </p>
          </div>
        </div>
        <p className="text-white text-ellipsis text-sm md:text-lg">
          See Detail
        </p>
      </div>
    </div>
  );
};

export default ResponsiveCard;
