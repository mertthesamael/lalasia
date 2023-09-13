import PrimaryButton from "@/components/Buttons/PrimaryButton";
import React, { FC } from "react";

interface CtaSectionProps {}

const CtaSection: FC<CtaSectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className=" flex flex-col md:flex-row justify-between py-10 md:py-28 items-center gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <h1 className="text-black lg:text-4xl text-2xl font-bold text-center md:text-left">
          Join with me to get special discount
        </h1>
        <PrimaryButton text="Learn More" />
      </div>
    </section>
  );
};

export default CtaSection;
