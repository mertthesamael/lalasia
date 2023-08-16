"use client"
import styles from './style.module.scss'
import React, { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import ArticleCard from '@/components/Cards/ArticleCard';
import { SlideArrowSecondary } from '@/components/Icons/SlideArrow';
interface ArticlesSlideProps {
  
}

const ArticlesSlide: FC<ArticlesSlideProps> = ({  }) => {
  const swiperRef = useRef<any>(null);

  return (

    <Swiper className={styles.articleSlide} onSwiper={(swiper) => swiperRef.current = swiper}>
        <SwiperSlide className={styles.articleSlide__slide}>
            <ArticleCard />
        </SwiperSlide>
        <SwiperSlide className={styles.articleSlide__slide}>
            <ArticleCard />
        </SwiperSlide>
        <div className='absolute bottom-0 z-10 right-0 flex'>
          <button className='hidden xl:grid place-items-center bg-white p-5' onClick={() => swiperRef.current.slidePrev()}><SlideArrowSecondary stroke='#518581' className='rotate-180'/></button>
          <button className='hidden xl:grid place-items-center bg-primaryColor p-5' onClick={() => swiperRef.current.slideNext()}><SlideArrowSecondary stroke='white'/></button>
        </div>
    </Swiper>
  )
}

export default ArticlesSlide;