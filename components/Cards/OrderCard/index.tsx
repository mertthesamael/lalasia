import { TOrder } from '@/types/Order';
import React, { FC } from 'react'

interface OrderCardProps {
  order:TOrder
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
  return (
    <div className='w-max h-max rounded-lg shadow-lg p-6'>
        <div>
            <h1 className='text-black text-base'>{order.date.toString(

            )}</h1>
        </div>
        <div>

        </div>
    </div>
  )
}

export default OrderCard;