import CheckoutFormSection from "@/containers/checkout-page/form-section";
import CheckoutSuccessSection from "@/containers/checkout-page/success-section";
import React, { FC } from "react";

interface CheckoutProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Checkout: FC<CheckoutProps> = ({searchParams}) => {
  const success = typeof searchParams.complate === "string" ? searchParams.complate : false;

  if(success){
    return(
      <main className="flex gap-6 justify-center">
      <CheckoutSuccessSection />
    </main>
    )
  }

  return (
    <main className="flex gap-6 justify-center">
      <CheckoutFormSection />
    </main>
  );
};

export default Checkout;
