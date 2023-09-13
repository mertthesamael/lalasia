import { Article } from "@/types/Article";
import { ArticleFilter } from "@/types/Filters";

export const articleFilters: ArticleFilter[] = [
  "All",
  "Color Guide",
  "Design Inspiration",
  "Interior Design",
  "Tips and Trick",
];

export const trendingArticles: Article[] = [
  {
    id: 8,
    title: "Beautiful and Functional Home Terrace Decoration",
    content:
      "Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If by chance your house has enough space or space.",
    date: new Date(),
    imgUrl: "/article8.png",
    author: {
      id: 2,
      name: "Michaela Augus",
      imgUrl: "/author2.png",
    },
    category: "Tips and Trick",
  },
  {
    id: 9,
    title: "Modern Minimalist Home Design: Aesthetics of Modern Home Interiors",
    content:
      "Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If by chance your house has enough space or space.",
    date: new Date(),
    imgUrl: "/article9.png",
    author: {
      id: 2,
      name: "Michaela Augus",
      imgUrl: "/author2.png",
    },
    category: "Design Inspiration",
  },
  {
    id: 10,
    title:
      "20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look More Fun",
    content:
      "Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to",
    date: new Date(),
    imgUrl: "/article10.png",
    author: {
      id: 2,
      name: "Michaela Augus",
      imgUrl: "/author2.png",
    },
    category: "Color Guide",
  },
];
