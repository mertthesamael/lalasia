import { TProduct } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ProductCardProps {
  item: TProduct;
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col md:gap-7 gap-5 w-max">
      <Link href={`/product/${item.id}`} className="">
        <Image
          src={item.imgUrl}
          width={394}
          height={360}
          className="w-[156px] h-[130px] sm:w-[220px] sm:h-[194px] md:w-[394px] md:h-[360px]"
          alt="Product IMG"
        />
      </Link>
      <div className="flex flex-col md:gap-4 gap-3">
        <h2 className="text-textColor font-bold text-xs md:text-lg">
          {item.category}
        </h2>
        <div>
          <Link
            href={`/product/${item.id}`}
            className="text-black md:text-2xl text-xs font-bold"
          >
            {item.name}
          </Link>
          <p className="text-textColor text-xs md:text-lg w-[156px] md:w-full">
            {item.title}
          </p>
        </div>
        <span className="text-black md:text-xl text-lg font-bold">
          ${item.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
