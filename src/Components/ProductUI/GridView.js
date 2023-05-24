import React from 'react';
import Product from '../FeaturedSection/Product';

const GridView = ({products}) => {
  return (
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
   {
    products && products.map((currEle,index)=>{
        return <Product {...currEle} key={index}/>
    })
   }
   </div>
  )
}

export default GridView