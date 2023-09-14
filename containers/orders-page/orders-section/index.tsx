import OrderCard from '@/components/Cards/OrderCard';
import { TBasketItem } from '@/types/BasketItem';
import { TOrder } from '@/types/Order';
import React, { FC } from 'react'

interface OrdersOrdersSectionProps {
  orders:TOrder[]
}

// WHAT A COMPONENT NAME LOL
const OrdersOrdersSection: FC<OrdersOrdersSectionProps> = ({ orders }) => {
console.log(orders)
  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <div className='flex justify-center gap-6 flex-wrap'>
        {orders.map((el,_i) => (
          <OrderCard key={_i} order={el}/>
          ))}
          </div>
      </div>
    </section>
  )
}

export default OrdersOrdersSection;