"use client"
import styles from './style.module.scss'
import React, { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { SlideArrow } from '@/components/Icons/SlideArrow';
import Image from 'next/image';
interface ArticlesHeroSlideProps {
  
}

const ArticlesHeroSlide: FC<ArticlesHeroSlideProps> = ({  }) => {
    const swiperRef = useRef<any>(null)
  return (
    <Swiper onSwiper={(swiper) => swiperRef.current = swiper} className={styles.articleHeroSlide}>
        <SwiperSlide className={styles.articleHeroSlide__slide}>
            <div className='w-full h-[200px] md:h-[550px]   flex justify-center relative'>
            <Image src={'/articleBanner.png'} fill alt='Lalasia Banner' style={{objectFit:'cover'}}/>
            <div className='linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) bg-gradient-to-t from-[#15141175] to-[transparent] absolute w-full h-full'/>
                <div className='w-[80%] absolute h-[133px] lg:h-[200px] bg-white -bottom-[35%] md:-bottom-[10%] lg:-bottom-[20%] z-10 'style={{boxShadow:' 0px 4px 80px 0px rgba(175, 173, 181, 0.20) '}}>
                    <div className='w-full h-full flex flex-col px-3 lg:px-10 justify-center gap-4'>
                    <div className='w-[80%] flex flex-col gap-2'>
                        <h2 className='text-[10px] lg:text-lg text-textColor'>Tips and Trick</h2>
                        <h1 className='text-xs lg:text-2xl text-black font-bold'>This 400-Square-Foot New York Apartment Is Maximized With Custom Millwork</h1>
                    </div>
                    <div className='flex gap-4 items-center w-full'>
                        <div className='flex gap-2 items-center'>
                        <Image src={'/author.png'} alt='Lalasia Author' width={28} height={28}/>
                        <h3 className='text-xs lg:text-sm text-black font-bold'>By Morgan Goldberg</h3>
                        </div>
                        <span className='text-xs lg:text-sm text-textColor'>Tuesday, 17 May 2022</span>
                    </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <button
        onClick={() => swiperRef.current.slideNext()}
        className="text-black  absolute bottom-[50%] top-[50%] z-10 left-12 w-[52px] h-[52px] rounded-full bg-[#15141199] backdrop-blur items-center justify-center hidden md:flex"
      >
        <SlideArrow />
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        className="text-black  absolute bottom-[50%] top-[50%] z-10 right-12 w-[52px] h-[52px] rounded-full bg-[#15141199] backdrop-blur  items-center justify-center hidden md:flex"
      >
        <SlideArrow className="rotate-180 " />
      </button>
    </Swiper>
  )
}

export default ArticlesHeroSlide;