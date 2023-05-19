import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const Product = (currElement) => {
    const {id,name , image, price , category }=currElement;
  return (
   <NavLink to={`/singleproduct/${id}`}>
    <div className='card bg-white '>
        {/* <figure className="w-auto flex justify-center items-center relative overflow-hidden transition-all duration-[0.5s] ease-linear after:content-['*'] after:absolute after:top-0 after:left-0 after:w-0 after:h-[100%] bg-[#0000001a] after:transition-all after:duration-[0.2s] after:ease-linear after:cursor-pointer hover:after:w-[100%] 
        "> */}
         <figure className="sm:w-auto flex justify-center items-center relative sm:overflow-hidden transition-all duration-[0.5s] ease-linear    
        ">
        <img src={image} url="image" className='sm:w-[90%] mt-6 h-44 sm:h-60 hover:scale-[1.2] transition-all duration-[0.2s] ease-linear'/>
        <figcaption className="caption absolute top-[15%]  sm:right-[10%] bg-[#f9f9ff] uppercase text-sm sm:text-[1.2rem] rounded-[2rem] py-[0.2rem] px-[0.8rem]">{category}</figcaption>
        </figure>
        <div className='card-description  flex justify-between sm:py-4  px-6'>
        <p className='capitalize'>{name}</p>
        <p className='text-slate-500'><FormatPrice price={price}/></p>
        </div>

    </div>
   

   </NavLink>
  )
}

export default Product