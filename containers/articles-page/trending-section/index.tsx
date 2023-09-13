"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ArticleCard from "@/components/Cards/ArticleCard";
import React, { FC, useState } from "react";
import { articleFilters, trendingArticles } from "./constants";
import FilterButton from "@/components/Buttons/FilterButton";
import { ArticleFilter } from "@/types/Filters";

interface ArticlesTrendingSectionProps {}

const ArticlesTrendingSection: FC<ArticlesTrendingSectionProps> = ({}) => {
  const [activeFilter, setActiveFilter] = useState<ArticleFilter>("All");

  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 ">
        <div className="w-full flex flex-col md:gap-4 gap-2">
          <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
            Trending Topics
          </h1>
          <h2 className="text-black md:text-5xl font-bold text-2xl">
            Popular last week
          </h2>
        </div>
        <div className="w-full  flex flex-wrap gap-2">
          {articleFilters.map((el, _i) => (
            <FilterButton
              onClick={() => setActiveFilter(el)}
              key={_i}
              activeFilter={activeFilter}
              text={el}
            />
          ))}
        </div>
        <div className="w-full flex flex-col gap-7">
          {trendingArticles.map((el, _i) => (
            <ArticleCard
              key={_i}
              horizontal
              responsive
              id={el.id}
              author={el.author}
              title={el.title}
              content={el.content}
              category={el.category}
              date={el.date}
              imgUrl={el.imgUrl}
            />
          ))}
        </div>
        <div>
          <PrimaryButton
            text="Load More"
            className="bg-white border font-bold !text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default ArticlesTrendingSection;
