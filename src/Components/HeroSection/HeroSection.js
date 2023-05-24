import React from 'react';
import HeroDescription from './HeroDescription';
import HeroImageSection from './HeroImageSection';
const HeroSection = (props) => {
  return (
    <div className='grid  md:grid-cols-2 gap-14 mt-8 md:mt-14'>
       <HeroDescription value={props.value}/>
       <HeroImageSection/>
    </div>
  )
}

export default HeroSection;