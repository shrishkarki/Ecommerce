import React from 'react'

const TrustedPartner = () => {
  return (
   <div className='flex flex-col w-full justify-center items-center mt-16 bg-[#f9f9ff] py-8'>
    <h1 className='text-lg text-slate-700 font-extrabold '>Trusted by 100+ Companies</h1>
    <div className='trustes-partners w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 place-items-center mt-7'>
        <div className='slide-1 w-28 h-20 md:w-36 md:h-24'>
            <img  src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image1.png' alt='patners ' className='w-full h-full'/>

        </div>
        <div className='slide-2 w-28 h-20 md:w-36 md:h-24'>
            <img src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png' alt='patners' className='w-full h-full'/>

        </div>
        <div className='slide-3 w-28 h-20 md:w-36 md:h-24'>
            <img src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png' alt='patners' className='w-full h-full'/>

        </div>
        <div className='slide-4 w-28 h-20 md:w-36 md:h-24'>
            <img src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png' alt='patners' className='w-full h-full'/>

        </div>
        <div className='slide-5 w-28 h-20 md:w-36 md:h-24'>
            <img src='https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png' alt='patners' className='w-full h-full'/>

        </div>
    </div>
   </div>
  )
}

export default TrustedPartner;