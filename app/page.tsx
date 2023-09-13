import ArticlesSection from "@/containers/home-page/articles-section";
import CtaSection from "@/containers/home-page/cta-section";
import HeroSection from "@/containers/home-page/hero-section";
import InfoSection from "@/containers/home-page/info-section";
import PopularProducts from "@/containers/home-page/popular-products-section";
import ServicesSection from "@/containers/home-page/services-section";
import TestimonialSection from "@/containers/home-page/testimonial-section";
import { getAll } from "@/libs/endpoints";
import axios from "axios";

const getItems = async () => {
  const data = await axios(getAll);
  return data.data;
};

export default async function Home() {
  const items = await getItems();

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PopularProducts products={items?.data} />
      <InfoSection />
      <TestimonialSection />
      <ArticlesSection />
      <CtaSection />
    </main>
  );
}
