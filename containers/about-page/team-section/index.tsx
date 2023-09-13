import PeopleCard from "@/components/Cards/PeopleCard";
import React, { FC } from "react";
import { TeamMembers } from "./constants";

interface AboutTeamSectionProps {}

const AboutTeamSection: FC<AboutTeamSectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl flex flex-col py-10  items-center mx-5 md:mx-20 gap-8 md:gap-24">
        AboutTeamSection
        <div className="flex w-full justify-between md:items-center md:flex-row flex-col items-start gap-4">
          <div className="flex flex-col md:gap-4 gap-2 w-full">
            <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
              Benefits
            </h1>
            <h2 className="text-black md:text-5xl font-bold text-2xl">
              Meet our leading and
              <br /> strong team
            </h2>
          </div>
          <div className="w-full md:max-w-[505px] h-full flex items-end">
            <p className="text-textColor text-sm md:text-lg">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between w-full gap-7">
          {TeamMembers.map((el, _i) => (
            <PeopleCard
              key={_i}
              imgUrl={el.imgUrl}
              id={el.id}
              name={el.name}
              title={el.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
