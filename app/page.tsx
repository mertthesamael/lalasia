import ArticlesSection from "@/containers/home-page/articles-section";
import CtaSection from "@/containers/home-page/cta-section";
import InfoSection from "@/containers/home-page/info-section";
import PopularProducts from "@/containers/home-page/popular-products-section";
import ServicesSection from "@/containers/home-page/services-section";
import TestimonialSection from "@/containers/home-page/testimonial-section";
import { getAll } from "@/libs/endpoints";
import axios from "axios";
import HeroSection from "@/containers/home-page/hero-section";
import { Suspense } from "react";



export default function Home() {
  

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Suspense fallback={<h1>Loading..</h1>}>
        <PopularProducts />
      </Suspense>
      <InfoSection />
      <TestimonialSection />
      <ArticlesSection />
      <CtaSection />
    </main>
  );
}
