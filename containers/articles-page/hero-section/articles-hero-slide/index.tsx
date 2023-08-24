"use client";
import styles from "./style.module.scss";
import React, { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { SlideArrow } from "@/components/Icons/SlideArrow";
import Image from "next/image";
import ArticleSlide from "./slide";
interface ArticlesHeroSlideProps {}

const ArticlesHeroSlide: FC<ArticlesHeroSlideProps> = ({}) => {
  const swiperRef = useRef<any>(null);
  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      className={styles.articleHeroSlide}
    >
      {Array(3)
        .fill(0)
        .map((el, _i) => (
          <SwiperSlide key={_i} className={styles.articleHeroSlide__slide}>
            <ArticleSlide />
          </SwiperSlide>
        ))}
      <button
        onClick={() => swiperRef.current.slidePrev()}
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
  );
};

export default ArticlesHeroSlide;
