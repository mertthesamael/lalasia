import { AuthorType } from "./Author";

export type Article = {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
  author: AuthorType;
  content: string;
  date: Date;
};
