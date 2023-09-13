"use client";
import React, { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "./style.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideArrow } from "@/components/Icons/SlideArrow";
import ProductsBanner from "@/components/Banners/ProductsBanner";

interface ProductsHeroSlideProps {}

const ProductsHeroSlide: FC<ProductsHeroSlideProps> = ({}) => {
  const swiperRef = useRef<any>(null);
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="products-hero-slide"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      <SwiperSlide className="bg-transparent">
        <ProductsBanner />
      </SwiperSlide>
      <SwiperSlide className="bg-transparent">
        <ProductsBanner />
      </SwiperSlide>
      <SwiperSlide className="bg-transparent">
        <ProductsBanner />
      </SwiperSlide>

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

export default ProductsHeroSlide;
