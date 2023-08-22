import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = ({}) => {
  return (
    <div className="flex flex-col md:gap-7 gap-5 w-max">
      <Link href={'/product/1'} className="">
        <Image src={"/product.png"} width={394} height={360} className="w-[156px] h-[130px] sm:w-[220px] sm:h-[194px] md:w-[394px] md:h-[360px]" alt="Product IMG" />
      </Link>
      <div className="flex flex-col md:gap-4 gap-3">
        <h2 className="text-textColor font-bold text-xs md:text-lg">Lamp</h2>
        <div>
          <Link href={'/product/1'} className="text-black md:text-2xl text-xs font-bold">Bardono Smart Lamp</Link>
          <p className="text-textColor text-xs md:text-lg w-[156px] md:w-full">
            Easy to use with bluetooth connection
          </p>
        </div>
        <span className="text-black md:text-xl text-lg font-bold">$62.23</span>
      </div>
    </div>
  );
};

export default ProductCard;
