import { searchHandler } from "@/actions/search";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Search } from "@/components/Icons/Search";
import React, { FC } from "react";

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = ({}) => {
  return (
    <form action={searchHandler}>
      <div
        className="w-full rounded-lg p-2 md:p-4 bg-white flex items-center gap-4"
        style={{ boxShadow: " 0px 4px 140px 0px rgba(175, 173, 181, 0.20)" }}
      >
        <Search />
        <input
          type="text"
          name="searchKey"
          placeholder="Search for a product"
          className="h-full w-full text-black border-none outline-none"
        />
        <PrimaryButton text="Search" />
      </div>
    </form>
  );
};

export default SearchInput;
