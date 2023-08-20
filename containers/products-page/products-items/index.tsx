"use client"
import PageButton from '@/components/Buttons/PageButton';
import ProductCard from '@/components/Cards/ProductCard';
import { SlideArrow } from '@/components/Icons/SlideArrow';
import React, { FC, useState } from 'react'

interface PromiseItemsProps {
  
}

const getData = () => {

    const data = new Promise((resolve) => setTimeout(() => {
        const simulatedData = { message: "Data fetched successfully" };
        resolve(simulatedData);
    }, 2000))
    return data

}

const PromiseItems: FC<PromiseItemsProps> = async({  }) => {
    const itemsPerPage = 9;
    const [page, setPage] = useState(1)
    // const data = await getData()
  return (
    <section className='w-full flex justify-center'>
      <div className='flex flex-col justify-between  gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20  px-5 md:px-0'>
        <div className='w-full'>
          <div className='flex w-max gap-6'>
            <h2 className='text-4xl text-black font-bold'>Total Product</h2>
            <span className='text-primaryColor text-base px-4 bg-[#F9F9F9] rounded-lg grid place-items-center h-max'>184</span>
          </div>
        </div>
        <div className='w-full flex flex-wrap gap-[30px] justify-between'>
          {Array(9).fill(0).map((el,_i) => <ProductCard key={_i}/>)}
        </div>
        <div className='w-full flex justify-center items-center gap-6 py-6'>
          <div>
            <SlideArrow stroke='black'/>
          </div>
          <div>
          <PageButton currentPage={page} value={1}/>
          <PageButton currentPage={page} value={2}/>
          <PageButton currentPage={page} value={3}/>
          </div>
          <div>
            <SlideArrow stroke='black' className='rotate-180'/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PromiseItems;