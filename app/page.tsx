import ArticlesSection from '@/containers/home-page/articles-section'
import CtaSection from '@/containers/home-page/cta-section'
import HeroSection from '@/containers/home-page/hero-section'
import InfoSection from '@/containers/home-page/info-section'
import PopularProducts from '@/containers/home-page/popular-products-section'
import ServicesSection from '@/containers/home-page/services-section'
import TestimonialSection from '@/containers/home-page/testimonial-section'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PopularProducts />
      <InfoSection />
      <TestimonialSection />
      <ArticlesSection />
      <CtaSection/>
    </main> 
  )
}
