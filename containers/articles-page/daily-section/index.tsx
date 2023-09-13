import ArticleCard from "@/components/Cards/ArticleCard";
import React, { FC } from "react";
import { mockDailyArticles } from "./constants";

interface ArticlesDailySectionProps {}

const ArticlesDailySection: FC<ArticlesDailySectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 ">
        <div className="w-full flex flex-col md:gap-4 gap-2">
          <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
            Daily News
          </h1>
          <h2 className="text-black md:text-5xl font-bold text-2xl">
            Today top headlines
          </h2>
        </div>
        <div className="w-full flex flex-col xl:flex-row justify-between gap-4">
          {mockDailyArticles.map((el, _i) => (
            <ArticleCard
              key={_i}
              secondary
              id={el.id}
              content={el.content}
              title={el.title}
              category={el.category}
              author={el.author}
              imgUrl={el.imgUrl}
              date={el.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesDailySection;
