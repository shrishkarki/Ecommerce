import React from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({products}) => {
  console.log("hello");
  return(
    <div className='w-full flex flex-col justify-center place-items-center '>
     { products.map((currEle,index)=>{
      const {id, name, image,price, description}=currEle;
        return(
          <div key={index} className='grid grid-cols-2 px-10 border-2 border-neutral-400 w-[80%] py-10 mt-6'>
            <figure>
              <img src={image} alt="image" className='h-44 w-72'/>
            </figure>
            <div>
              <p className='font-bold capitalize mb-1'>{name}</p>
              <p className='text-lime-800 font-medium'><FormatPrice price={price}/></p>
            <p>{description.slice(0,90)}....</p>
            <NavLink to={`/singleproduct/${id}`}>
              <button className='px-4 py-2 border-1 bg-slate-500 mt-2 hover:bg-slate-700 hover:text-white'>Read More</button>
            </NavLink>
            </div>
           
          </div>
        )
     })}
    </div>
   
  )

}

export default ListView