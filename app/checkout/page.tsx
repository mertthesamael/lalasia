import CheckoutFormSection from "@/containers/checkout-page/form-section";
import React, { FC } from "react";

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = ({}) => {
  return (
    <main className="flex gap-6 justify-center">
      <CheckoutFormSection />
    </main>
  );
};

export default Checkout;
