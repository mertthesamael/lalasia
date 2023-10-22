import SearchResultSection from "@/containers/search-page/result-section";
import SearchSection from "@/containers/search-page/search-section";
import { searchItem } from "@/libs/endpoints";
import axios from "axios";
import React, { FC } from "react";

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
const getResults = async (searchValue: string | boolean) => {
  const { data } = await axios.post(searchItem, { key: searchValue });
  return data;
};
const SearchPage: FC<SearchPageProps> = async ({ searchParams }) => {
  if (searchParams.search) {
    const { data } = await getResults(String(searchParams.search));
    return (
      <main>
        <SearchSection />
        <SearchResultSection results={data} searchKey={searchParams.search} />
      </main>
    );
  } else {
    return (
      <main>
        <SearchSection />
      </main>
    );
  }
};

export default SearchPage;
