import React, { FC } from "react";

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage: FC<ArticlePageProps> = ({ params }) => {
  return (
    <main>
      <h1 className="text-black text-4xl font-bold">{`Article id:${params.id}`}</h1>
    </main>
  );
};

export default ArticlePage;
