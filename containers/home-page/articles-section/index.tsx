import ArticleCard from "@/components/Cards/ArticleCard";
import React, { FC } from "react";
import ArticlesSlide from "./articles-slide";
import { mockArticles } from "./constants";

interface ArticlesSectionProps {}

const ArticlesSection: FC<ArticlesSectionProps> = ({}) => {
  return (
    <section className="w-full lg:flex lg:justify-center   ">
      <div className=" flex flex-col xl:justify-between xl:flex-row py-10 md:py-28 md:items-center  gap-8 md:gap-24 max-w-full lg:max-w-screen-xl mx-5 md:mx-20">
        <div className="flex flex-col justify-between h-auto w-full lg:max-w-[581px] lg:w-max ">
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col md:gap-4 gap-2">
              <h1 className="text-secondaryColor md:text-lg font-bold text-sm ">
                Articles
              </h1>
              <h2 className="text-black md:text-5xl font-bold text-2xl">
                The best furniture comes from Lalasia
              </h2>
            </div>
            <div className="">
              <p className="text-textColor text-sm md:text-lg">
                Pellentesque etiam blandit in tincidunt at donec.
              </p>
            </div>
          </div>
          <div className="flex items-center max-w-full">
            <ArticlesSlide />
          </div>
        </div>
        <div className="flex flex-col  items-end gap-8 h-max xl:w-full">
          {mockArticles.map((el, _i) => (
            <ArticleCard
              key={_i}
              horizontal
              id={el.id}
              imgUrl={el.imgUrl}
              author={el.author}
              date={el.date}
              content={el.content}
              title={el.title}
              category={el.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
