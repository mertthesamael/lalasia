import { AuthorType } from "@/types/Author";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ArticleCardProps {
  horizontal?: boolean;
  responsive?: boolean;
  secondary?: boolean;

  id: number;
  category: string;
  imgUrl: string;
  title: string;
  content: string;
  author: AuthorType;
  date: Date;
}

const ArticleCard: FC<ArticleCardProps> = ({
  horizontal,
  responsive,
  secondary,
  id,
  title,
  content,
  author,
  date,
  category,
  imgUrl,
}) => {
  if (secondary) {
    return (
      <div className="flex flex-col md:gap-7 gap-5 w-full max-w-full xl:w-[605px]">
        <Link href={"/product/1"} className="">
          <Image
            src={imgUrl}
            width={394}
            height={340}
            className="!w-full h-[180px] md:h-[250px] xl:h-[340px] object-cover"
            alt="Product IMG"
          />
        </Link>
        <div className="flex flex-col md:gap-4 gap-3">
          <h2 className="text-textColor w-max text-xs md:text-lg">
            {category}
          </h2>
          <div className="flex flex-col gap-3">
            <Link
              href={"/product/1"}
              className="text-black md:text-2xl text-xs font-bold line-clamp-1"
            >
              {title}
            </Link>
            <p className="text-textColor text-xs md:text-lg  md:w-full line-clamp-2">
              {content}
            </p>
          </div>
          <div className="flex w-max  gap-6 items-center">
            <div className="flex items-center gap-[10px]">
              <Image
                src={author.imgUrl}
                width={28}
                height={28}
                className="w-[18px] h-[18px] md:w-[28px] md:h-[28px]"
                style={{ borderRadius: "50%" }}
                alt="Author IMG"
              />
              <h3 className="font-bold text-xs md:text-sm text-black">
                {author.name}
              </h3>
            </div>
            <div>
              <p className="text-textColor text-xs flex md:text-sm">
                {date.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (horizontal) {
    return (
      <div className="flex gap-3 md:gap-7 bg-white w-full">
        <div className="w-max h-max">
          <Image
            src={imgUrl}
            width={260}
            height={260}
            className="md:!min-w-[260px]  md:!min-h-[260px]  !min-h-[110px] h-[110px] !min-w-[110px] w-[110px] transition-all ease-in-out hover:scale-110 "
            alt="Article Cover"
          />
        </div>
        <div
          className="w-[203px] md:w-[329px] flex flex-col gap-2 md:gap-5 justify-center"
          style={responsive ? { width: "100%", height: "100%" } : {}}
        >
          <div>
            <h2 className="text-textColor text-xs md:text-base lg:text-lg">
              {category}
            </h2>
          </div>
          <div>
            <h1 className="text-black font-bold text-base lg:text-2xl line-clamp-2">
              {title}
            </h1>
          </div>
          <div className="hidden md:flex">
            <p className="text-textColor md:text-xs lg:text-lg">{content}</p>
          </div>
          <div className="flex w-max  gap-6 items-center">
            <div className="flex items-center gap-[10px]">
              <Image
                src={author.imgUrl}
                width={28}
                height={28}
                className="w-[18px] h-[18px] md:w-[28px] md:h-[28px]"
                style={{ borderRadius: "50%" }}
                alt="Author IMG"
              />
              <h3 className="font-bold text-xs md:text-sm text-black">
                {author.name}
              </h3>
            </div>
            <div>
              <p className="text-textColor hidden md:flex md:text-sm">
                {date.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full  h-[200px] md:h-[565px] relative ">
      <div className="relative w-full h-full">
        <Image
          src={imgUrl}
          fill
          style={{ objectFit: "cover" }}
          alt="Article IMG"
        />
        <div className="linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) bg-gradient-to-t from-[#15141175] to-[transparent] absolute w-full h-full" />
        <div className="max-w-[530px] flex flex-col gap-3 h-full w-full relative  justify-end p-6">
          <div>
            <h2 className=" text-xs md:text-lg">{category}</h2>
          </div>
          <div>
            <h1 className="font-bold text-base md:text-2xl">{title}</h1>
          </div>
          <div>
            <p className="text-white text-ellipsis text-lg truncate">
              {content}
            </p>
          </div>
          <div>
            <p className="text-white text-ellipsis text-lg truncate font-bold">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
