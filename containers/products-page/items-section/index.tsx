import ProductCard from "@/components/Cards/ProductCard";
import SortDropDown from "@/components/DropDowns/Sort";
import Pagination from "@/components/Pagination";
import { TProduct } from "@/types/Product";
import React, { FC } from "react";

interface ProductsItemsProps {
  products: TProduct[];
  size: number;
  itemsPerView: number;
}

const ProductsItems: FC<ProductsItemsProps> = ({
  products,
  size,
  itemsPerView,
}) => {
  // This one provides fake loader
  // const data = await loader()

  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col justify-between  gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20   md:px-0">
        <div className="w-full flex justify-start lg:justify-between">
          <div className="flex md:gap-6">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              Total Product
            </h2>
            <span className="text-primaryColor text-xs md:text-base px-4 bg-[#F9F9F9] rounded-lg grid place-items-center h-max">
              {size}
            </span>
          </div>
          <div className="hidden lg:flex gap-6">
            <SortDropDown />
          </div>
        </div>
        <div
          id="items"
          className="w-full flex flex-wrap gap-[30px] justify-between"
        >
          {products.map((el, _i) => (
            <ProductCard key={_i} item={el} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Pagination itemPerView={itemsPerView} totalItems={size} />
        </div>
      </div>
    </section>
  );
};

export default ProductsItems;
