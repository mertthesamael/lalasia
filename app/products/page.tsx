import ProductsHero from "@/containers/products-page/products-hero";
import ProductsSearch from "@/containers/products-page/search-section";
import React, { FC } from "react";
import axios from "axios";
import { getAll } from "@/libs/endpoints";
import ProductsItems from "@/containers/products-page/items-section";

interface ProductsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
const getItems = async (
  page: number,
  perItem: number,
  sort: string | boolean
) => {
  const { data } = await axios.post(getAll, {
    page: page,
    perItems: perItem,
    sort: sort,
  });
  return data;
};

const loader = async () => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000); // 2000 milliseconds = 2 seconds
  });
  return data;
};
const Products: FC<ProductsProps> = async ({ searchParams }) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const sort =
    typeof searchParams.sort === "string" ? searchParams.sort : false;
  const itemPerView = 6;
  const items = await getItems(page, itemPerView, sort);

  // Fake Loader
  // const loading = await loader()
  return (
    <main>
      <ProductsHero />
      <ProductsSearch />
      <ProductsItems
        itemsPerView={itemPerView}
        products={items.data}
        size={items.size}
      />
    </main>
  );
};

export default Products;
