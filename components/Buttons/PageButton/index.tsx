import React, { FC } from 'react'

interface PageButtonProps {
  currentPage:number,
  value:number
}

const PageButton: FC<PageButtonProps> = ({ currentPage, value }) => {
  return (
    <button className={`w-[38px] h-[42px] ${currentPage===value?'bg-primaryColor':'bg-white border-2'} `}>
        <span className={`text-lg ${currentPage===value? 'text-white':'text-black'}`}>1</span>
    </button>
  )
}

export default PageButton;