import React, { FC } from 'react'
import BasketItems from './items';

interface CheckoutFormSectionProps {
  
}

const CheckoutFormSection: FC<CheckoutFormSectionProps> = ({  }) => {
  return (
    <section className='flex w-full justify-center'>
        <div className='flex py-10 flex-col lg:flex-row md:py-15 justify-between items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 relative'>
           <BasketItems />
        </div>
    </section>
  )
}

export default CheckoutFormSection;