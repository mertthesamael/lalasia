import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Search } from '@/components/Icons/Search';
import React, { FC } from 'react'

interface SearchInputProps {
  
}

const SearchInput: FC<SearchInputProps> = ({  }) => {
  return (
    <div className='w-full rounded-lg p-2 md:p-4 bg-white flex items-center gap-4' style={{boxShadow:' 0px 4px 80px 0px rgba(175, 173, 181, 0.20);'}}>
     <Search />
     <input type='text' placeholder='Search property' className='h-full w-full text-black border-none outline-none'/>
     <PrimaryButton text='Search'/>
    </div>
  )
}

export default SearchInput;