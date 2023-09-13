import Image from "next/image";
import React, { FC } from "react";

interface PeopleCardProps {
  id: number;
  imgUrl: string;
  name: string;
  title: string;
}

const PeopleCard: FC<PeopleCardProps> = ({ imgUrl, name, title }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[327px] lg:w-[394px] h-[299px] lg:h-[360px] bg-slate-600 relative">
        <Image
          src={imgUrl}
          alt="lalasia member"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-sm lg:text-2xl text-black font-bold">{name}</h1>
        <span className="text-xs lg:text-lg text-textColor font-medium">
          {title}
        </span>
      </div>
    </div>
  );
};

export default PeopleCard;
