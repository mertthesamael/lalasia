import React, { FC } from 'react'

interface PrimaryButtonProps {
  text:string
  className?:string
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text,className }) => {
  return (
      <button className={`bg-primaryColor w-[130px] p-2 md:p-4 md:w-[170px] md:h-[52px] text-sm md:text-md text-white ${className} `}>{text}</button>
    )
  
}

export default PrimaryButton;