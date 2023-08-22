import React, { FC } from 'react'

interface ServicesPortfolioProps {
  
}

const ServicesPortfolio: FC<ServicesPortfolioProps> = ({  }) => {
  return (
    <section className='w-full flex justify-center'>
        <div className='flex flex-col py-10 items-center gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20'>
        <div className='flex w-full justify-between md:items-center md:flex-row flex-col items-start gap-4'>
            <div className='flex flex-col md:gap-4 gap-2 w-full'>
                <h1 className='text-secondaryColor md:text-lg font-bold text-sm'>Portofolio</h1>
                <h2 className='text-black md:text-5xl font-bold text-2xl'>Amazing project we've<br />
                done before</h2>
            </div>
            <div className='w-full md:max-w-[505px] h-full flex items-center'>
                <p className='text-textColor text-sm md:text-lg'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default ServicesPortfolio;