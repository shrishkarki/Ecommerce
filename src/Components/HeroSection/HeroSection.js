import React from 'react';
import HeroDescription from './HeroDescription';
import HeroImageSection from './HeroImageSection';
const HeroSection = () => {
  return (
    <div className='grid  md:grid-cols-2 gap-14 mt-8 md:mt-14'>
       <HeroDescription/>
       <HeroImageSection/>
    </div>
  )
}

export default HeroSection;