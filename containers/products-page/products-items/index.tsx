import React, { FC } from 'react'

interface PromiseItemsProps {
  
}

const getData = () => {

    const data = new Promise((resolve) => setTimeout(() => {
        const simulatedData = { message: "Data fetched successfully" };
        resolve(simulatedData);
    }, 2000))
    return data

}

const PromiseItems: FC<PromiseItemsProps> = async({  }) => {

    // const data = await getData()
  return (
    <div>
     PromiseItems
    </div>
  )
}

export default PromiseItems;