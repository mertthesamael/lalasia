import ServiceCard from "@/components/Cards/ServiceCard";
import React, { FC } from "react";
import { ServiceCards } from "./constants";

interface ServicesCardsProps {}

const ServicesCards: FC<ServicesCardsProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col py-10 items-center gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <div className="w-full flex justify-between flex-wrap gap-5">
          {ServiceCards.map((el, _i) => (
            <ServiceCard
              key={_i}
              numeric
              title={el.title}
              content={el.content}
              id={el.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
