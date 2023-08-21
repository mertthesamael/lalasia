"use client"
import React, { FC, useCallback, useState } from 'react'
import { SlideArrow } from '../Icons/SlideArrow';
import PageButton from '../Buttons/PageButton';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage:number,
  itemPerView:number,
  totalItems:number
}

const Pagination: FC<PaginationProps> = ({ itemPerView, totalItems }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter()
    const pathname = usePathname()
    const searchParams : any = useSearchParams()
   
    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
      (name: string, value: number) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, String(value))
        setCurrentPage(value)
        return params.toString()
      },
      [searchParams]
    )
    
  return (
    <div className='flex justify-center items-center gap-6 py-6'>
             <div>
            <SlideArrow stroke='black'/>
          </div>
          <div>
            {Array(Math.ceil(totalItems/itemPerView)).fill(0).map((el, _i) => <PageButton key={_i}   onClick={() => {
          
          router.push(pathname + '?' + createQueryString('page', _i+1))
        }} currentPage={searchParams.get('page')?Number(searchParams.get('page')):1} value={_i+1}/>)}
          </div>
          <div>
            <SlideArrow stroke='black' className='rotate-180'/>
          </div>

    </div>
  )
}

export default Pagination;