"use client";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import React, { FC, useRef } from "react";
import ProductCard from "@/components/Cards/ProductCard";
import { SlideArrow } from "@/components/Icons/SlideArrow";
import { TProduct } from "@/types/Product";

interface PopularProductsSlideProps {
  items: TProduct[];
}

const PopularProductsSlide: FC<PopularProductsSlideProps> = ({ items }) => {
  const swiperRef = useRef<any>(null);
  return (
    <Swiper
      className={styles.popularProductsSlide}
      spaceBetween={29}
      loop
      loopedSlides={3}
      slidesPerView={"auto"}
      centeredSlides
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {items?.map((el, _i) => (
        <SwiperSlide key={_i} className={styles.popularProductsSlide__slide}>
          <ProductCard item={el} />
        </SwiperSlide>
      ))}
      {items?.map((el, _i) => (
        <SwiperSlide key={_i} className={styles.popularProductsSlide__slide}>
          <ProductCard item={el} />
        </SwiperSlide>
      ))}

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
  );
};

export default PopularProductsSlide;
