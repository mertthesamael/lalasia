import ProductCard from "@/components/Cards/ProductCard";
import { getAll } from "@/libs/endpoints";
import { TProduct } from "@/types/Product";
import axios from "axios";
import React, { FC } from "react";

interface RelatedSectionProps {}
const getItems = async () => {
  const { data } = await axios(getAll);
  return data;
};

const RelatedSection: FC<RelatedSectionProps> = async({}) => {

  const items = await getItems()
  return (
    <section className="w-full flex justify-center">
      /* <div className='flex flex-col justify-between  gap-7 w-full max-w-screen-xl mx-5 md:mx-20 py-10'>
        <h1 className='text-black text-3xl font-bold'>Related Items</h1>
        <div className='flex w-full flex-wrap gap-6 justify-between'>
            {items.data.splice(1,3).map((el:TProduct, _i:number) => <ProductCard item={el} key={_i}/>)}
        </div>
  </div>*/
    </section>
  );
};

export default RelatedSection;
