import FilterDropdown from '@/components/DropDowns/Filter';
import SearchInput from '@/components/Forms/Inputs/Search';
import React, { FC } from 'react'

interface ProductsSearchProps {
  
}

const ProductsSearch: FC<ProductsSearchProps> = ({  }) => {
  return (
    <section className='w-full flex justify-center'>
     <div className=" flex flex-col md:flex-row justify-between py-10 md:py-28 items-center gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 ">
        <div className='w-full'>
        <SearchInput />
        </div>
        <div className='hidden md:flex'>
        <FilterDropdown/>
        </div>
     </div>
    </section>
  )
}

export default ProductsSearch;