"use client"
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { postBasket } from "@/libs/endpoints";
import { useUserStore } from "@/store/useUserStore";
import axios from "axios";
import React, { FC } from "react";

interface BasketDropdownProps {
  items: any[];
  isOpen: boolean;
}

const BasketDropdown: FC<BasketDropdownProps> = ({ items, isOpen }) => {
    const {user,handleUser} = useUserStore()
    const removeBasketItem = async(item:any) => {
        const {data} = await axios.post(postBasket,{action:'remove',user:user,item:item})
        if(data){
            handleUser(data.result)
        }
      }
      console.log(items)
  return (
    <div
      className={`bg-white flex flex-col w-max h-max max-h-0 overflow-hidden absolute top-[4.5rem] transition-all ${
        isOpen ? "!max-h-[10rem] " : "!max-h-0"
      }`}>
        <div>
      {items.map((el,_i) => <h1 key={_i} onClick={() => removeBasketItem(el)} className="text-black cursor-pointer">{el.item.name}</h1>)}
        </div>
        <div>
          <PrimaryButton className="!w-max !h-max !py-2" text="Checkout"/>
          <h1 className="text-black">{user?.totalPrice}</h1>
        </div>
    </div>
  );
};

export default BasketDropdown;
