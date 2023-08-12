import SearchInput from "@/components/Forms/Inputs/Search";
import Image from "next/image";
import React, { FC } from "react";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl flex flex-col py-10 md:py-20 items-center mx-5 md:mx-20 gap-8 md:gap-24">
        <div className="flex flex-col items-center w-full md:w-[800px] text-center gap-8">
          <div className="">
            <h1 className="text-2xl md:text-6xl text-black font-bold">
              Discover Furniture With High Quality Wood
            </h1>
          </div>
          <div>
            <p className="text-textColor text-sm md:text-lg">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
            </p>
          </div>
        </div>
        <div className="w-full relative flex justify-center flex-col items-center gap-8">
            <div className="md:absolute top-[-2.5rem] w-full h-[48px]  md:w-[810px] z-10">
                <SearchInput />
            </div>
            <div className="w-full h-[160px] md:h-[480px]  border-black relative overflow-hidden">
                <Image className="rounded-lg object-cover" src={'/hero.png'} fill alt="Hero IMG"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
