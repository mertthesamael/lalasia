import React, { FC } from "react";
import BasketItems from "./items";

interface CheckoutFormSectionProps {}

const CheckoutFormSection: FC<CheckoutFormSectionProps> = ({}) => {
  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <BasketItems />
      </div>
    </section>
  );
};

export default CheckoutFormSection;
