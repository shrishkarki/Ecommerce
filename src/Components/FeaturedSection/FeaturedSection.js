import React, { useContext } from 'react';
import { IndexContext } from '../ContextApi/IndexContext';
import Product from './Product';

const FeaturedSection = () => {
    const {isLoading, featureProduct}=useContext(IndexContext);
    
    if(isLoading){
        return <p className='text-lg'>.......Loading</p>
    }
  return (
   <div className='wrapper px-5 ms:px-10 sm:px-16 md:px-24 lg:px-36 bg-[#f9f9ff] mt-16 py-4'>
    <div className='feature'>
    <p className=' text-base ms:text-lg font-bold text-gray-600'>Check Now!!</p>
    <p className='text-black font-bold text-lg ms:text-xl sm:text-3xl mb-3 mt-1'>Our Featured Section</p>
    <div className='grid ms:grid-cols-2 lg:grid-cols-3 gap-3 ms:gap-4'>
        {
            featureProduct.map((currElement=>{
                return <Product key={currElement.id} {...currElement}/>
            }))
        }
    </div>
    </div>
   </div>
  )
}

export default FeaturedSection