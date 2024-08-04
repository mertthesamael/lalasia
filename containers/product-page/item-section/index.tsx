"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { TProduct } from "@/types/Product";
import Image from "next/image";
import React, { FC, useState } from "react";
import { colors } from "./constants";
import axios from "axios";
import { postBasket } from "@/libs/endpoints";
import { useUserStore } from "@/store/useUserStore";
import cryptoRandomString from "crypto-random-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import useCreateQueryString from "@/hooks/useQueryString";

interface ItemSectionProps {
  item: TProduct;
}
const ItemColorSelection = ({ item, currentColor }: { item: TProduct, currentColor: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCreateQueryString();
  const [selectedColor, setSelectedColor] = useState<string>(currentColor)

  return (
    <>
      <h3 className="text-black text-sm md:text-lg font-semibold">
        Color &nbsp;&nbsp;<span className="text-xs text-gray-400 font-normal">{selectedColor}</span>
      </h3>
      <div className="flex">
        {item.colors.map((el, _i) => (
          <div
            key={_i}
            onClick={() => { setSelectedColor(el); router.push(pathname + "?" + createQueryString("color", el), { scroll: false }) }
            }
            style={{ background: colors[el] }}
            className={`cursor-pointer bottom-0 relative transition-all h-[50px] w-[50px] border-4 border-transparent ${el === selectedColor ? "  !border-primaryColor" : ""
              }`}
          />
        ))}
      </div>
    </>
  )
}
const ItemSection: FC<ItemSectionProps> = ({ item }) => {
  const { user, handleUser } = useUserStore();
  const searchParams: any = useSearchParams();
  const selectedColor = searchParams.get("color")
    ? searchParams.get("color")
    : item.color;



  const addBasket = async () => {
    const isValidColor = item.colors.filter(
      (color) => color === selectedColor
    ).length;
    if (isValidColor > 0) {
      try {
        const { data } = await axios.post(postBasket, {
          action: "add",
          user: user,
          payload: {
            item: item,
            id: cryptoRandomString({ length: 15 }),
            color: selectedColor,
          },
        });
        if (data) {
          toast.success(item.name + "Successfully added to your basket!");
          return handleUser(data.result);
        } else {
          return toast.error("Something Went Wrong");
        }
      } catch (err) {
        return toast.error("You need to Login first");
      }
    }
    return toast.error("Wrong color");
  };
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between  gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20   py-10 md:pt-28">
        <div className="relative">
          <Image
            src={item.imgUrl}
            width={600}
            height={600}
            alt="Lalasia Product"
            className="min-w-full h-auto  lg:w-[600px]"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col justify-center gap-[30px] w-full md:w-[590px]">
          <div className="flex flex-col gap-2">
            <h1 className="xl:text-4xl text-2xl text-black font-bold">
              {item.name}
            </h1>
            <span className="text-textColor text-sm md:text-lg">
              {item.title}
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <ItemColorSelection currentColor={selectedColor} item={item} />
            <p className="text-textColor text-sm xl:text-lg ">
              {item.description}
            </p>
          </div>
          <div className="">
            <span className="xl:text-4xl text-2xl text-black font-bold">
              ${item.price}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
            <form action={addBasket}>
              <PrimaryButton
                type="submit"
                text="Add to Cart"
                className="w-full font-semibold flex items-center justify-center"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemSection;
