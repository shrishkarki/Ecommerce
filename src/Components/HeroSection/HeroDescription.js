import React from 'react';
import { NavLink } from 'react-router-dom';
// import { IndexContext } from '../ContextApi/IndexContext';
// import { useContext } from 'react';

const HeroDescription = (props) => {
  // const {name}=useContext(IndexContext);
  return (
    <div className='hero-description w-full flex justify-center md:justify-end items-center h-60'>
        <div className='w-[300px]'>
        <p className="text-slate-500">WELCOME TO</p>
       <h1 className='text-4xl font-semibold leading-10 '>{props.value}</h1>
       <p className='leading-7 mb-3'>Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing.</p>

       <NavLink to="/product" className="bg-slate-400 px-4 py-2 text-white shadow-lg">SHOP NOW</NavLink>
      
        </div>
      
        </div>
  )
}

export default HeroDescription