"use client";
import styles from "./style.module.scss";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import TestimonialCard from "@/components/Cards/TestimonialCard";

interface TestimonialSlideProps {}

const TestimonialSlide: FC<TestimonialSlideProps> = ({}) => {
  return (
    <Swiper
      className={styles.testimonialSlide}
      spaceBetween={30}
      loop
      loopedSlides={2}
      slidesPerView={"auto"}
      centeredSlides
    >
      <SwiperSlide className={styles.testimonialSlide__slide}>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide className={styles.testimonialSlide__slide}>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide className={styles.testimonialSlide__slide}>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide className={styles.testimonialSlide__slide}>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide className={styles.testimonialSlide__slide}>
        <TestimonialCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialSlide;
