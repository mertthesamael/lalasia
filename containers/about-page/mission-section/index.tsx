import React, { FC } from "react";
import { Services } from "./constants";
import ServiceCard from "@/components/Cards/ServiceCard";

interface AboutMissionSectionProps {}

const AboutMissionSection: FC<AboutMissionSectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex py-10 flex-col lg:flex-row md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 ">
        <div className="w-full h-full flex flex-col gap-14">
          <div className="w-full flex flex-col md:gap-4 gap-2">
            <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
              Our Mission
            </h1>
            <h2 className="text-black md:text-5xl font-bold text-2xl">
              Our team dedicated to help find smart home product
            </h2>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-black md:text-3xl lg:text-5xl font-bold text-2xl">
                20+
              </h1>
              <p className="text-sm lg:text-lg text-textColor">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-black md:text-3xl lg:text-5xl font-bold text-2xl">
                483
              </h1>
              <p className="text-sm lg:text-lg text-textColor">Happy Client</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-black md:text-3xl lg:text-5xl font-bold text-2xl">
                150+
              </h1>
              <p className="text-sm lg:text-lg text-textColor">
                Project Finished
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          {Services.map((el, _i) => (
            <ServiceCard
              key={_i}
              icon={el.icon}
              title={el.title}
              id={el.id}
              content={el.content}
              horizontal
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
