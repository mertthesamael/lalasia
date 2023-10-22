import ProductCard from "@/components/Cards/ProductCard";
import { TProduct } from "@/types/Product";
import React, { FC } from "react";

interface SearchResultSectionProps {
  results: TProduct[];
  searchKey: string | string[];
}

const SearchResultSection: FC<SearchResultSectionProps> = ({
  results,
  searchKey,
}) => {

  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <div className="flex flex-col text-center gap-5">
          <h1 className="text-black text-2xl md:text-6xl font-bold">{`Results for "${searchKey}"`}</h1>
          {results.length === 0 && <span className="text-2x font-bold text-secondaryColor">{`No result for "${searchKey}"`}, try to search "white"</span>}
        </div>
        <div className="w-full flex flex-wrap gap-6 justify-between">
          {results.map((el, _i) => (
            <ProductCard key={_i} item={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResultSection;
