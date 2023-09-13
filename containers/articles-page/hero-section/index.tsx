import React, { FC } from "react";
import ArticlesHeroSlide from "./articles-hero-slide";

interface ArticlesHeroSectionProps {}

const ArticlesHeroSection: FC<ArticlesHeroSectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 ">
        <div className="flex flex-col text-center gap-5">
          <h1 className="text-black text-2xl md:text-6xl font-bold">
            Articles
          </h1>
          <p className="text-textColor text-sm md:text-lg w-full md:w-[600px]">
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </p>
        </div>
        <div className="w-full h-[300px] md:h-[500px] xl:h-[720px]">
          <ArticlesHeroSlide />
        </div>
      </div>
    </section>
  );
};

export default ArticlesHeroSection;
