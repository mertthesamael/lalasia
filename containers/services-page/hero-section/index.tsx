import Image from "next/image";
import React, { FC } from "react";

interface ServicesHeroProps {}

const ServicesHero: FC<ServicesHeroProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 border-b">
        <div className="flex flex-col text-center gap-5">
          <h1 className="text-black text-2xl md:text-6xl font-bold">
            Services
          </h1>
          <p className="text-textColor text-sm md:text-lg w-full md:w-[505px]">
            The product crafted by talented crafter and using high quality
            material with love inside
          </p>
        </div>
        <div className="flex w-full h-[200px] md:h-[505px] bg-black relative">
          <Image
            src={"/serviceBanner.png"}
            alt="Lalasia Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
