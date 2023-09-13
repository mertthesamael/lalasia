import ArticlesCtaSection from "@/containers/articles-page/cta-section";
import ArticlesDailySection from "@/containers/articles-page/daily-section";
import ArticlesHeroSection from "@/containers/articles-page/hero-section";
import ArticlesTrendingSection from "@/containers/articles-page/trending-section";
import React, { FC } from "react";

interface ArticleProps {}

const Article: FC<ArticleProps> = ({}) => {
  return (
    <main>
      <ArticlesHeroSection />
      <ArticlesDailySection />
      <ArticlesTrendingSection />
      <ArticlesCtaSection />
    </main>
  );
};

export default Article;
