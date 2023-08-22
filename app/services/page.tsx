import ServicesCards from '@/containers/services-page/services-cards';
import ServicesHero from '@/containers/services-page/services-hero';
import ServicesPortfolio from '@/containers/services-page/services-portfolio';
import React, { FC } from 'react'

interface ServicesProps {
  
}

const Services: FC<ServicesProps> = ({  }) => {
  return (
    <main>
        <ServicesHero />
        <ServicesCards />
        <ServicesPortfolio />
    </main> 
  )
}

export default Services;