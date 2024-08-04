import { colors } from '@/containers/product-page/item-section/constants';
import { formatDateToSQLDateTime } from '@/libs/utils';
import { TOrder } from '@/types/Order';
import Link from 'next/link';
import React, { FC } from 'react'

interface OrderCardProps {
  order:TOrder
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
  return (
    <div className='w-max h-max rounded-lg flex flex-col gap-5 shadow-lg p-6 font-medium'>
        <div>
            <h1 className='text-primaryColor font-bold text-base'>{formatDateToSQLDateTime(order.date)}</h1>
        </div>
        <div className='flex flex-col gap-4'>
            {order.products.map((el, _i) => (
              <Link key={_i} href={`/product/${el.item.id}`} className='text-textColor text-base'>{el.item.name}  <span
              style={{ background: colors[el.item.color] }}
              className="text-white text-[8px] ml-3 xl:text-xs truncate px-2 py-1 bg-primaryColor w-max"
            >
              {el.item.color}
            </span></Link>
            ))}
        </div>
        <div>
          <h1 className='text-black text-base'>Total price: <span className='text-black text-base font-bold'>${order.price}</span></h1>
        </div>
    </div>
  )
}

export default OrderCard;