import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from 'next/image';
import React, { FC } from 'react'

interface ItemSectionProps {
  
}

const ItemSection: FC<ItemSectionProps> = ({  }) => {
  const colors = [
    {
      id:1,
      value:'#151411'
    },
    {
      id:2,
      value:'#314443'
    },
    {
      id:3,
      value:'#C5A26E'
    },
  ]
  return (
    <section className='w-full flex justify-center'>
      <div className='flex flex-col lg:flex-row items-center justify-between  gap-2 md:gap-5 w-full max-w-screen-xl mx-5 md:mx-20   py-10 md:pt-28'>
        <div className='relative'>
          <Image src={'/product.png'} width={600} height={600} alt='Lalasia Product' className='min-w-full h-auto  lg:w-[600px]' style={{objectFit:'contain'}}/>
        </div>
        <div className='flex flex-col justify-center gap-[30px] w-full md:w-[590px]'>
          <div className='flex flex-col gap-2'>
            <h1 className='xl:text-4xl text-2xl text-black font-bold'>White Aesthetic Chair</h1>
            <span className='text-textColor text-sm md:text-lg'>Combination of wood and wool</span>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-black text-sm md:text-lg font-semibold'>Color</h3>
            <div className='flex'>
              {colors.map((el,_i) => <div key={_i} style={{background:el.value}} className={`h-[50px] w-[50px]`}/>)}
            </div>
            <p className='text-textColor text-sm xl:text-lg '>Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...</p>
          </div>
          <div className=''>
            <span className='xl:text-4xl text-2xl text-black font-bold'>$99.98</span>
          </div>
          <div className='flex flex-col lg:flex-row gap-2 lg:gap-5'>  
            <PrimaryButton text='Buy Now' className='w-full border-2 border-transparent font-semibold flex items-center justify-center lg:w-max'/>
            <PrimaryButton text='Add to Cart' className='w-full bg-white !text-black font-semibold border-2 flex items-center justify-center lg:w-max'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemSection;