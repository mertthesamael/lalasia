import { TBasketItem } from "./BasketItem"


export type TOrder = {
    id:number,
    userId:number,
    products:TBasketItem[],
    price:number,
    date:Date
}