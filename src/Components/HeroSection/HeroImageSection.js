import React from 'react';
import HeroImage from '../../Assests/market.jpg'

const HeroImageSection = () => {
  return (
    
<div className='hero-image relative  flex justify-center md:justify-start md:flex-none h-[200px]'>
        <div className='w-72 h-48 md:w-80 md:h-56  absolute top-6 z-50'>
            <img src={HeroImage} alt='market' className='w-full h-full'/>
        </div>
        <div className='w-[185px] h-28 md:w-[200px] md:h-40 bg-slate-400 absolute top-0 left-40'></div>
        
    </div>
  
    
  )
}

export default HeroImageSection