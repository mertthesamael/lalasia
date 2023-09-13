import ServicesCards from "@/containers/services-page/cards-section";
import ServicesCta from "@/containers/services-page/cta-section";
import ServicesHero from "@/containers/services-page/hero-section";
import ServicesPortfolio from "@/containers/services-page/portfolio-section";
import React, { FC } from "react";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <main>
      <ServicesHero />
      <ServicesCards />
      <ServicesPortfolio />
      <ServicesCta />
    </main>
  );
};

export default Services;
