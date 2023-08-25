import Image from 'next/image'
import React, { FC } from 'react'

interface ArticleCardProps {
  horizontal?:boolean
  responsive?:boolean
}

const ArticleCard: FC<ArticleCardProps> = ({ horizontal,responsive }) => {


    if(horizontal){
        return(
            <div className='flex gap-7 bg-white w-full'>
                <div className='w-max h-max'>
                    <Image src={'/article.png'} width={260} height={260} className='md:min-w-[260px] md:min-h-[260px] !h-[110px] !w-[110px] transition-all ease-in-out hover:scale-110 ' alt='Article Cover'/>
                </div>
                <div className='w-[203px] md:w-[329px] flex flex-col gap-2 md:gap-5 justify-center' style={responsive?{width:'100%',height:'100%'}:{}}>
                    <div>
                        <h2 className='text-textColor text-xs md:text-lg'>Tips and Trick</h2>
                    </div>
                    <div>
                        <h1 className='text-black font-bold text-base md:text-2xl'>6 ways to give your home minimalistic vibes</h1>
                    </div>
                    <div className='hidden md:flex'>
                        <p className='text-textColor text-lg'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .</p>
                    </div>
                    <div className='flex w-max  gap-6 items-center'>
                        <div className='flex items-center gap-[10px]'>
                            <Image src={'/author.png'} width={28} height={28} className='w-[18px] h-[18px] md:w-[28px] md:h-[28px]' style={{borderRadius:'50%'}} alt='Author IMG'/>
                            <h3 className='font-bold text-xs md:text-sm text-black'>By Jerremy Jean</h3>
                        </div>
                        <div>
                            <p className='text-textColor hidden md:flex md:text-sm'>Friday, 1 April 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div className='w-full  h-[200px] md:h-[565px] relative '>
        <div className='relative w-full h-full'>
        <Image src={'/article.png'} fill style={{objectFit:'cover'}} alt='Article IMG' />
        <div className='linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) bg-gradient-to-t from-[#15141175] to-[transparent] absolute w-full h-full'/>
      <div className='max-w-[530px] flex flex-col gap-3 h-full w-full relative  justify-end p-6'>
        <div>
            <h2 className=' text-xs md:text-lg'>Tips and Trick</h2>
        </div>
        <div>
            <h1 className='font-bold text-base md:text-2xl'>Create Cozy Dinning Room Vibes</h1>
        </div>
        <div>
            <p className='text-white text-ellipsis text-lg truncate'>Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture. The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office.</p>
        </div>
        <div>
            <p className='text-white text-ellipsis text-lg truncate font-bold'>Read More</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard;