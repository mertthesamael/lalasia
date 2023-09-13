import ServiceCard from "@/components/Cards/ServiceCard";
import React, { FC } from "react";
import { Services } from "./constants";

interface ServicesSectionProps {}

const ServicesSection: FC<ServicesSectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl flex flex-col py-10 md:py-20 items-center mx-5 md:mx-20 gap-8 md:gap-24">
        <div className="flex w-full justify-between md:items-center md:flex-row flex-col items-start gap-4">
          <div className="flex flex-col md:gap-4 gap-2 w-full">
            <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
              Benefits
            </h1>
            <h2 className="text-black md:text-5xl font-bold text-2xl">
              Benefits when using
              <br />
              our services
            </h2>
          </div>
          <div className="w-full md:max-w-[505px] h-full flex items-end">
            <p className="text-textColor text-sm md:text-lg">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
        </div>
        <div className="flex w-full xl:justify-between flex-col lg:flex-row items-center flex-wrap justify-center gap-6">
          {Services.map((el, _i) => (
            <ServiceCard
              key={_i}
              title={el.title}
              content={el.content}
              icon={el.icon}
              id={el.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
