import React, { FC } from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import ItemSection from '@/containers/product-page/item-section'
import RelatedSection from '@/containers/product-page/related-section'
import axios from 'axios'
interface ProductProps {
    params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: ProductProps,
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // fetch data
   const product = await axios.post(process.env.NEXT_PUBLIC_SITE_URL ?? process?.env?.NEXT_PUBLIC_VERCEL_URL ?? 'http://localhost:3000/'+'api/products/getSingle',{id:id})
    // optionally access and extend (rather than replace) parent metadata
    //const previousImages = (await parent).openGraph?.images || []
    return {
      //title: await product,
      title:product?.data?.data?.name,
      openGraph:{
        images:[product?.data?.data?.imgUrl]
      }

    }
  }

  const getSingleProduct = async(id:string) => {
   const product = await axios.post(process.env.NEXT_PUBLIC_SITE_URL ?? process?.env?.NEXT_PUBLIC_VERCEL_URL ?? 'http://localhost:3000/'+'api/products/getSingle',{id})
   return product.data
  }
const Product: FC<ProductProps> = async({ params }) => {
  const product = await getSingleProduct(params.id)
  return (
    <main>
      <ItemSection item={product.data}/>
      <RelatedSection />
    </main>
  )
}

export default Product;