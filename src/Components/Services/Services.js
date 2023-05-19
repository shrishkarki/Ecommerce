import React from 'react'
import{FcProcess} from 'react-icons/fc';
import{GiProgression} from 'react-icons/gi';
import{SiProgress,SiOpenproject} from 'react-icons/si';




const Services = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-16  md:px-5 lg:px-28 xl:px-32 gap-3 md:gap-0 '>
            <div className='service-1 w-auto h-40 bg-[#f9f9ff] flex flex-col justify-center place-items-center rounded-[1rem] shadow-lg text-center '>
                <FcProcess className='w-12 h-8'/>
                <p>Always display accurate pricing</p>
            </div>
            <div className='service-2 w-auto gap-4  bg-[#f9f9ff] flex flex-col justify-center place-items-center rounded-[1rem] text-center  bg-transparent'>
                <div className='service-col-2 w-full md:w-auto h-20 bg-[#f9f9ff] flex justify-center place-items-center rounded-[1rem]  shadow-lg '> <GiProgression className='w-12 h-8'/><p className='ml-2'>Offer special pricing online</p></div>
               
                <div className='service-col-2 w-full md:w-auto h-20 bg-[#f9f9ff] flex justify-center place-items-center rounded-[1rem]  shadow-lg'><SiOpenproject className='w-12 h-8'/><p className='ml-2'>Automatically charge for fees </p></div>
                </div>
            <div className='sevice-3 w-auto h-40 bg-[#f9f9ff] flex flex-col justify-center place-items-center rounded-[1rem]  shadow-lg text-center '>
               <SiProgress className='w-12 h-8'/> <p>Show the better deal with tier pricing</p>
            </div>

        </div>
    )
}

export default Services