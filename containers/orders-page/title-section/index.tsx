import React, { FC } from 'react'

interface OrdersTitleSectionProps {
  
}

const OrdersTitleSection: FC<OrdersTitleSectionProps> = ({  }) => {
  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col py-10 md:pt-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <h1 className="text-2xl lg:text-6xl text-black font-bold">Your Orders</h1>
      </div>
    </section>
  )
}

export default OrdersTitleSection;