"use client"
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { redirect, useRouter } from 'next/navigation';
import React, { FC } from 'react'

interface CheckoutSuccessSectionProps {
  
}

const CheckoutSuccessSection: FC<CheckoutSuccessSectionProps> = ({  }) => {
    const router = useRouter()
  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center text-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">

        <h1 className="text-black max-w-[50rem] text-2xl  md:text-6xl font-bold">
          Thank you for choosing Lalasia.
        </h1>
        <PrimaryButton
          text="See Your Orders"
          className="!font-bold"
          onClick={() => router.push('/orders')}
        />
      </div>
    </section>
  )
}

export default CheckoutSuccessSection;