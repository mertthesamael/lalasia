import { Quote } from "@/components/Icons/Quote";
import { RateStar } from "@/components/Icons/RateStar";
import Image from "next/image";
import React, { FC } from "react";

interface TestimonialCardProps {}

const TestimonialCard: FC<TestimonialCardProps> = ({}) => {
  return (
    <div className="flex flex-col p-6 bg-white gap-4 md:gap-6 shadow-xl w-max">
      <div>
        <Quote className="md:h-10 md:w-10 w-8 h-8" />
      </div>
      <div className="w-[295px] md:w-[497px]">
        <p className="text-textColor text-sm md:text-lg ">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non.
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Image
            src={"/author.png"}
            width={50}
            height={50}
            className="md:w-[50px] md:h-[50px] w-5 h-5"
            style={{ borderRadius: "50%" }}
            alt="Author"
          />
          <h3 className="text-black text-sm md:text-xl font-bold">
            Janne Cooper
          </h3>
        </div>
        <div className="flex gap-2 items-center">
          <RateStar />
          <span className="text-black text-sm md:text-lg font-bold">4.3</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
