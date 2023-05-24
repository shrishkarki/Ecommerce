import React, { useContext } from 'react';
import ProductFilter from '../Components/ProductUI/ProductFilter';
import ProductSort from '../Components/ProductUI/ProductSort';
import ProductSection from '../Components/ProductUI/ProductSection';
const Products = () => {

  return (
  //  <div className='grid grid-cols-[0.2fr,1fr] px-16'>
  <div className='grid grid-cols-12 px-10 xl:px-14'>
    <div className='col-span-12 lg:col-span-2'>
    <ProductFilter/>
    </div>
    <div className="col-span-12 lg:col-span-10">
      <div>
<ProductSort/>
      </div>
      <div className='bg-[#f9f9ff]'>
<ProductSection/>
      </div>
    </div>
   </div>
  )
}

export default Products