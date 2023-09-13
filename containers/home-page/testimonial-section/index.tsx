import TestimonialCard from "@/components/Cards/TestimonialCard";
import React, { FC } from "react";
import TestimonialSlide from "./testimonial-slide";

interface TestimonialSectionProps {}

const TestimonialSection: FC<TestimonialSectionProps> = ({}) => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full  mx-5 md:mx-20">
        <div className="flex flex-col gap-8 text-center">
          <div className="flex flex-col md:gap-4 gap-2">
            <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
              Testimonials
            </h1>
            <h2 className="text-black md:text-5xl font-bold text-2xl">
              What our customer say
            </h2>
          </div>
          <p className="text-textColor text-sm md:text-lg md:w-[656px]">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
        <div className="w-full">
          <TestimonialSlide />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
