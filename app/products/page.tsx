import ProductsHero from '@/containers/products-page/products-hero';
import ProductsSearch from '@/containers/products-page/search-section';
import React, { FC } from 'react'
import axios from 'axios';
import { getAll } from '@/libs/endpoints';
import PromiseItems from '@/containers/products-page/items-section';



interface ProductsProps {
  searchParams: { [key: string]: string | string[] | undefined }
}
const getItems = async(page:number,perItem:number) => {
    const data = await axios.post(getAll,{page:page,perItems:perItem})
    return data.data
}
const Products: FC<ProductsProps> = async({ searchParams }) => {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const itemPerView = 3;
  const items = await getItems(page,itemPerView)
  return (
    <main>
        <ProductsHero />
        <ProductsSearch />
        <PromiseItems itemsPerView={itemPerView} products={items.data} size={items.size}/>
    </main>
  )
}

export default Products;