import ArticlesDailySection from '@/containers/articles-page/daily-section';
import ArticlesHeroSection from '@/containers/articles-page/hero-section';
import React, { FC } from 'react'

interface ArticleProps {
  
}

const Article: FC<ArticleProps> = ({  }) => {
  return (
    <main>
     <ArticlesHeroSection />
     <ArticlesDailySection />
    </main>
  )
}

export default Article;