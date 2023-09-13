import { Article } from "@/types/Article";

export const mockArticles: Article[] = [
  {
    id: 1,
    title: "6 ways to give your home minimalistic vibes",
    content: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    date: new Date(),
    imgUrl: "/article.png",
    author: {
      id: 1,
      name: "Jerremy Jean",
      imgUrl: "/author.png",
    },
    category: "Tips and Trick",
  },
  {
    id: 2,
    title: "How to make your interiors cooler and more stylish",
    content: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    date: new Date(),
    imgUrl: "/article2.png",
    author: {
      id: 2,
      name: "Michaela Augus",
      imgUrl: "/author2.png",
    },
    category: "Design Inspiration",
  },
  {
    id: 3,
    title: "Elements to add character to your space",
    content: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    date: new Date(),
    imgUrl: "/article3.png",
    author: {
      id: 3,
      name: "Amon Gus",
      imgUrl: "/author3.png",
    },
    category: "Tips and Trick",
  },
];
export const highlightedArticles: Article[] = [
  {
    id: 1,
    title: "Create Cozy Dinning Room Vibes",
    content:
      "Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture. The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office.",
    date: new Date(),
    imgUrl: "/article.png",
    author: {
      id: 1,
      name: "Jerremy Jean",
      imgUrl: "/author.png",
    },
    category: "Tips and Trick",
  },
  {
    id: 2,
    title: "Create Cozy Dinning Room Vibes",
    content:
      "Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture. The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office.",
    date: new Date(),
    imgUrl: "/article.png",
    author: {
      id: 1,
      name: "Jerremy Jean",
      imgUrl: "/author.png",
    },
    category: "Tips and Trick",
  },
];
