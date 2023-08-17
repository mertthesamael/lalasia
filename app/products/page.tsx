import ProductsHero from '@/containers/products-page/products-hero';
import PromiseItems from '@/containers/products-page/products-items';
import React, { FC } from 'react'

interface ProductsProps {
  
}

const Products: FC<ProductsProps> = ({  }) => {
  return (
    <main>
        <ProductsHero />
        <PromiseItems />
    </main>
  )
}

export default Products;