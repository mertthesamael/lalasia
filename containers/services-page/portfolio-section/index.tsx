import ResponsiveCard from "@/components/Cards/ResponsiveCard";
import React, { FC } from "react";

interface ServicesPortfolioProps {}

const ServicesPortfolio: FC<ServicesPortfolioProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col py-10 xl:py-28 items-center gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 ">
        <div className="flex w-full justify-between md:items-center md:flex-row flex-col items-start gap-4 ">
          <div className="flex flex-col md:gap-4 gap-2 w-full">
            <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
              Portofolio
            </h1>
            <h2 className="text-black md:text-5xl font-bold text-2xl">
              Amazing project we&apos;ve
              <br />
              done before
            </h2>
          </div>
          <div className="w-full md:max-w-[505px] h-full flex items-center">
            <p className="text-textColor text-sm md:text-lg">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.{" "}
            </p>
          </div>
        </div>
        <div className="w-full min-h-[632px] flex flex-col xl:flex-row justify-between gap-6 ">
          <div className="w-full h-[409px] xl:h-full xl:w-[505px]">
            <ResponsiveCard />
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="h-[409px] w-full xl:w-[705px] xl:h-[301px]">
              <ResponsiveCard />
            </div>
            <div className="h-[409px] w-full xl:w-[705px] xl:h-[301px]">
              <ResponsiveCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPortfolio;
