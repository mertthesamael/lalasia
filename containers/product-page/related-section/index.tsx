import ProductCard from '@/components/Cards/ProductCard';
import React, { FC } from 'react'

interface RelatedSectionProps {
  
}

const RelatedSection: FC<RelatedSectionProps> = ({  }) => {
  return (
    <section className='w-full flex justify-center'>
        <div className='flex flex-col justify-between  gap-7 w-full max-w-screen-xl mx-5 md:mx-20 py-10'>
        <h1 className='text-black text-3xl font-bold'>Related Items</h1>
        <div className='flex w-full flex-wrap gap-6 justify-center md:justify-between'>
            {Array(3).fill(0).map((el, _i) => <ProductCard key={_i}/>)}
        </div>
        </div>
    </section>
  )
}

export default RelatedSection;