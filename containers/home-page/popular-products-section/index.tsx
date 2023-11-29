import ProductCard from "@/components/Cards/ProductCard";
import React, { FC } from "react";
import PopularProductsSlide from "./popular-products-slide";
import { TProduct } from "@/types/Product";
import axios from "axios";
import { getAll } from "@/libs/endpoints";

interface PopularProductsProps {
  products?: TProduct[];
}
const getItems = async () => {
  const data = await axios(getAll);
  return data.data;
};
const PopularProducts: FC<PopularProductsProps> = async ({  }) => {
  const products = await getItems();

  return (
    <section className="w-full flex flex-col items-center justify-center md:gap-14">
      <div className="w-full max-w-screen-xl flex flex-col py-10 md:py-20 items-center mx-5 md:mx-20 gap-4 md:gap-8 text-center">
        <div>
          <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
            Product
          </h1>
          <h2 className="text-black md:text-5xl font-bold text-2xl">
            Our popular product
          </h2>
        </div>
        <p className="text-textColor text-sm md:text-lg w-full md:w-[600px]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="w-full py-6">
        <PopularProductsSlide items={products.data} />
      </div>
    </section>
  );
};

export default PopularProducts;
