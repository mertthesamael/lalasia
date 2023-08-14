import Image from "next/image";
import React, { FC } from "react";

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = ({}) => {
  return (
    <div className="flex flex-col md:gap-7 gap-5 w-max">
      <div className="">
        <Image src={"/product.png"} width={394} height={360} className="w-[220px] h-[194px] md:w-[394px] md:h-[360px]" alt="Product IMG" />
      </div>
      <div className="flex flex-col md:gap-4 gap-3">
        <h2 className="text-textColor font-bold text-xs md:text-lg">Lamp</h2>
        <div>
          <h1 className="text-black md:text-2xl text-lg font-bold">Bardono Smart Lamp</h1>
          <p className="text-textColor text-xs md:text-lg w-full">
            Easy to use with bluetooth connection
          </p>
        </div>
        <span className="text-black md:text-xl text-lg font-bold">$62.23</span>
      </div>
    </div>
  );
};

export default ProductCard;
