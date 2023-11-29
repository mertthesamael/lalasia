import ProductsHero from "@/containers/products-page/products-hero";
import ProductsSearch from "@/containers/products-page/search-section";
import React, { FC, Suspense } from "react";
import axios from "axios";
import { getAll } from "@/libs/endpoints";
import ProductsItems from "@/containers/products-page/items-section";

interface ProductsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}



const Products: FC<ProductsProps> = ({ searchParams }) => {
 

  // Fake Loader
  // const loading = await loader()
  return (
    <main>
      <ProductsHero />
      <ProductsSearch />
      <Suspense fallback={<h1>Loading...</h1>}>
      <ProductsItems
      searchParams={searchParams}
      />
      </Suspense>
    </main>
  );
};

export default Products;
