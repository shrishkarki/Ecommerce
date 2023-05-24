import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../Assests/Logo.png";
import { BsCart2 } from 'react-icons/bs';
import {RxHamburgerMenu} from 'react-icons/rx';
import {GrClose} from 'react-icons/gr';
import { CartContext } from '../ContextApi/CartContext';


const Header = () => {

   const {total_item}=useContext(CartContext);


    const navLinks=[
        {
            path:"/",
            display:"HOME"
        },

        {
            path:"/about",
            display:"ABOUT"
        },
        {
            path:"/product",
            display:"PRODUCTS"
        },
        {
            path:"/contact",
            display:"CONTACTS"
        }
    ];

    const [open,setOpen]=useState(false)
  return (
    <div className='md:flex justify-between h-auto md:h-28 items-center  bg-[#f9f9ff] md:px-6 z-50 md:z-auto shadow-md'  >
        
         <div className='logo  w-[140px] h-[100px]' >
           
           <NavLink>
           
           <img src={logo} alt='logo' className='h-full w-full'/>
           </NavLink>


          
                
          
        </div>

        <div className='absolute right-8 top-6 cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
       { !open?<RxHamburgerMenu className=' w-12 h-6 '/>:
        <GrClose className=' w-12 h-6 '/>}
        </div>
       
        <div className={`navs absolute md:static md:flex ${open? 'top-24 opacity-100':"top-[-300px] opacity-0"} transition-all duration-500 ease-in md:opacity-100 bg-[#f9f9ff] w-full md:w-auto pl-6 md:pl-0` }>
            <div className='menu flex flex-col md:flex-row md:flex-none z-40'>
                {navLinks.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="md:px-5 font-semibold md:my-0 my-3">{item.display}</NavLink>
                ))}
            </div>
            {/* <button>Login</button> */}
            <div className='cart relative mt-5 md:mt-0' >
                    <NavLink to="/cart" className="">
                        <BsCart2 className='w-12 h-10'/>
                        <span className='absolute top-[-20%] left-6   md:top-[-20%] md:right-0 w-7 h-7 text-white rounded-[50%] grid place-items-center bg-slate-400 '>{total_item}</span>

                    </NavLink>
            </div>

        </div> 
       
    </div>
   
  )
}

export default Header