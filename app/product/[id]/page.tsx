import React, { FC, Suspense } from "react";
import type { Metadata } from "next";
import ItemSection from "@/containers/product-page/item-section";
import RelatedSection from "@/containers/product-page/related-section";
import axios from "axios";
import { getSingle } from "@/libs/endpoints";
import { notFound } from "next/navigation";

interface ProductProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export async function generateMetadata({
  params,
  searchParams,
}: ProductProps): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await axios.post(getSingle, { id: id });
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
  return {
    //title: await product,
    title: product?.data?.data?.name,
    description: product?.data?.data?.title,
    openGraph: {
      images: [product?.data?.data?.imgUrl],
    },
  };
}

const getSingleProduct = async (id: string) => {
  const product = await axios.post(getSingle, { id });
  return product.data;
};
const Product: FC<ProductProps> = async ({ params }) => {
  const product = await getSingleProduct(params.id);
  if (!product.data) {
    notFound();
  }
  return (
    <main>
      <Suspense>
        <ItemSection item={product.data} />
      </Suspense>
      <RelatedSection />
    </main>
  );
};

export default Product;
