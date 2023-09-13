import { Article } from "@/types/Article";

export const mockDailyArticles: Article[] = [
  {
    id: 6,
    title:
      "Bedroom Design is the Most Personal Reflection of the Owner, Really?",
    content:
      "Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to",
    date: new Date(),
    imgUrl: "/article6.png",
    author: {
      id: 2,
      name: "Michaela Augus",
      imgUrl: "/author2.png",
    },
    category: "Design Inspiration",
  },
  {
    id: 7,
    title:
      "Create a non-monotonous and dynamic interior atmosphere with these 9 variations of wall tiles",
    content:
      "Quoted from The Healthy Home Economist, a study in 1932 stated that color doesn't really have to be visible to have an effect The radiance of a",
    date: new Date(),
    imgUrl: "/article7.png",
    author: {
      id: 3,
      name: "Amon Gus",
      imgUrl: "/author3.png",
    },
    category: "Tips and Trick",
  },
];
