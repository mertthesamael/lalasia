import AboutCtaSection from "@/containers/about-page/cta-section";
import AboutHeroSection from "@/containers/about-page/hero-section";
import AboutMissionSection from "@/containers/about-page/mission-section";
import AboutTeamSection from "@/containers/about-page/team-section";
import React, { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <main>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutTeamSection />
      <AboutCtaSection />
    </main>
  );
};

export default About;
