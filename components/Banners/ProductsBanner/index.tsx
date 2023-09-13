import Image from "next/image";
import React, { FC } from "react";

interface ProductsBannerProps {}

const ProductsBanner: FC<ProductsBannerProps> = ({}) => {
  return (
    <div className="relative w-full h-[180px] md:h-[500px] ">
      <div className="linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) bg-gradient-to-t from-[#15141175] to-[transparent] absolute w-full h-full z-10 " />
      <Image
        src={"/productsBanner.webp"}
        alt="Lalasia products slide"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-[132px] gap-3 md:gap-5">
        <div className="px-[10px] py-[6px] md:px-4 md:py-2 bg-primaryColor w-max rounded-full md:rounded-xl">
          <p className="text-xs">Discount</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-5 h-max">
          <h2 className="text-lg md:text-5xl font-bold">Ramadhan Sale Offer</h2>
          <p className="text-xs md:text-2xl">
            Get 40% off for the first transaction
            <br /> on Lalasia
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
