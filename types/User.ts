// I defined 2 types here, because of the fact that "user" value can be nullish so..

import { JsonValue } from "@prisma/client/runtime/library";
import { TProduct } from "./Product";
import { TBasketItem } from "./BasketItem";

export type TUser = TPureUser | null;

export type TPureUser = {
  id: number;
  displayName: string;
  email: string;
  basket: any[];
  totalPrice: number;
};
