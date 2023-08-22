import React, { FC } from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import ItemSection from '@/containers/product-page/item-section'
import RelatedSection from '@/containers/product-page/related-section'
interface ProductProps {
    params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
/*export async function generateMetadata(
  { params, searchParams }: ProductProps,
    parent?: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // fetch data
   const product = new Promise<string>((resolve) => {
        return setTimeout(() => {
            resolve('Test')
            
        }, 1000);
    })
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    return {
      //title: await product,
      title:id,
      openGraph: {
       // images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    }
  }*/
const Product: FC<ProductProps> = ({  }) => {
  return (
    <main>
      <ItemSection />
      <RelatedSection />
    </main>
  )
}

export default Product;