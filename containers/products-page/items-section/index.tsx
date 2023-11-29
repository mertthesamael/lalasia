import ProductCard from "@/components/Cards/ProductCard";
import SortDropDown from "@/components/DropDowns/Sort";
import Pagination from "@/components/Pagination";
import { getAll } from "@/libs/endpoints";
import { TProduct } from "@/types/Product";
import axios from "axios";
import React, { FC } from "react";

interface ProductsItemsProps {
 
  searchParams: { [key: string]: string | string[] | undefined };
}
const getItems = async (
  page: number,
  perItem: number,
  sort: string | boolean
) => {
  const { data } = await axios.post(getAll, {
    page: page,
    perItems: perItem,
    sort: sort,
  });
  return data;
};
const ProductsItems: FC<ProductsItemsProps> = async({
 
  searchParams
}) => {
 
  const page =
  typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
const sort =
  typeof searchParams.sort === "string" ? searchParams.sort : false;
const itemsPerView = 5;
const items = await getItems(page, itemsPerView, sort);
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col justify-between  gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20   md:px-0">
        <div className="w-full flex justify-start lg:justify-between">
          <div className="flex md:gap-6">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              Total Product
            </h2>
            <span className="text-primaryColor text-xs md:text-base px-4 bg-[#F9F9F9] rounded-lg grid place-items-center h-max">
              {items.size}
            </span>
          </div>
          <div className="hidden lg:flex gap-6">
            <SortDropDown />
          </div>
        </div>
        <div
          id="items"
          className="w-full grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))] grid flex-wrap gap-[60px] "
        >
          {items.data.map((el:TProduct, _i:number) => (
            <ProductCard key={_i} item={el} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Pagination itemPerView={itemsPerView} totalItems={items.size} />
        </div>
      </div>
    </section>
  );
};

export default ProductsItems;
