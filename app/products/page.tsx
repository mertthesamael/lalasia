import ProductsHero from '@/containers/products-page/products-hero';
import PromiseItems from '@/containers/products-page/items-section';
import ProductsSearch from '@/containers/products-page/search-section';
import React, { FC } from 'react'
import axios from 'axios';
import { getAll } from '@/libs/endpoints';

interface ProductsProps {
  searchParams: { [key: string]: string | string[] | undefined }
}
const getItems = async() => {
    const data = await axios(getAll)
    return data.data
}
const Products: FC<ProductsProps> = async({ searchParams }) => {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const items = await getItems()

  return (
    <main>
        <ProductsHero />
        <ProductsSearch />
        <PromiseItems products={items.data}/>
    </main>
  )
}

export default Products;