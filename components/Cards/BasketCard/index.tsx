"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { colors } from "@/containers/product-page/item-section/constants";
import { postBasket } from "@/libs/endpoints";
import { useUserStore } from "@/store/useUserStore";
import { TBasketItem } from "@/types/BasketItem";
import axios from "axios";
import Image from "next/image";
import React, { FC } from "react";

interface BasketCardProps {
  item: TBasketItem;
}

const BasketCard: FC<BasketCardProps> = ({ item }) => {
  const { item: itemInfo } = item;
  const { user, handleUser } = useUserStore();

  const removeBasketItem = async (item: any) => {
    const { data } = await axios.post(postBasket, {
      action: "remove",
      user: user,
      item: item,
    });
    if (data) {
      handleUser(data.result);
    }
  };
  return (
    <div className="w-full lg:w-[25rem] xl:w-[28rem] flex gap-3 items-center h-max p-6   shadow-md">
      <div>
        <Image
          src={itemInfo.imgUrl}
          alt="Lalasia basket item"
          width={150}
          height={150}
          className="xl:min-w-[150px] xl:min-h-[150px]"
        />
      </div>
      <div className="flex w-full flex-col gap-2 xl:gap-4 ">
        <div className="flex flex-col xl:gap-1">
          <h1 className="text-black xl:text-lg truncate font-medium max-w-[15rem]">
            {itemInfo.name}
          </h1>
          <span
            style={{ background: colors[item.color] }}
            className="text-white text-[8px] xl:text-xs truncate px-2 py-1 bg-primaryColor w-max"
          >
            {item.color}
          </span>
        </div>
        <div>
          <p className="text-xs text-textColor line-clamp-1">
            {itemInfo.description}
          </p>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="text-black font-bold text-sm">
            ${itemInfo.price}
          </span>
          <PrimaryButton
            onClick={() => removeBasketItem(item)}
            className="!bg-red-400 !h-max !w-max !py-1 !px-2"
            text="Remove"
          />
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
