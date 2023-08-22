"use client"
import PageButton from '@/components/Buttons/PageButton';
import ProductCard from '@/components/Cards/ProductCard';
import { SlideArrow } from '@/components/Icons/SlideArrow';
import { Sort } from '@/components/Icons/Sort';
import Pagination from '@/components/Pagination';
import React, { FC, useState } from 'react'

interface PromiseItemsProps {
}


const PromiseItems: FC<PromiseItemsProps> = ({ }) => {
  return (
    <section className='w-full flex justify-center'>
      <div className='flex flex-col justify-between  gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20  px-5 md:px-0'>
        <div className='w-full flex justify-start lg:justify-between'>
            <div className='flex md:gap-6'>
            <h2 className='text-2xl md:text-4xl text-black font-bold'>Total Product</h2>
            <span className='text-primaryColor text-xs md:text-base px-4 bg-[#F9F9F9] rounded-lg grid place-items-center h-max'>184</span>
            </div>
            <div className='hidden lg:flex gap-6'>
              <Sort/>
              <span className='text-black text-lg'>Sort By</span>
          </div>
        </div>
        <div id='items' className='w-full flex flex-wrap gap-[30px] justify-between'>
          {Array(9).fill(0).map((el,_i) => <ProductCard key={_i}/>)}
        </div>
        <div className='w-full flex justify-center'>
        <Pagination itemPerView={9} totalItems={50} currentPage={1} />
        </div>
      </div>
    </section>
  )
}

export default PromiseItems;