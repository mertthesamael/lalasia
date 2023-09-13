import React, { FC } from "react";
import ProductsHeroSlide from "./products-hero-slide";

interface ProductsHeroProps {}

const ProductsHero: FC<ProductsHeroProps> = ({}) => {
  return (
    <section className="w-full flex flex-col items-center  ">
      <div className="flex flex-col  justify-between py-10 md:py-28 items-center gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20 text-center px-5 md:px-0">
        <h1 className="text-black text-2xl md:text-6xl font-bold">Products</h1>
        <p className="text-textColor text-sm md:text-lg w-full md:w-[600px]">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </div>
      <div className="w-full">
        <ProductsHeroSlide />
      </div>
    </section>
  );
};

export default ProductsHero;
