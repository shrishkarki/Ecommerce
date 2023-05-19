import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";


const CartQuantityToggle = ({quantity, setDecreaseQuanity ,setIncreaseQuantity}) => {

  
  return (
    <div className='flex'>
        {/* <div className='flex justify-around w-[30%] mt-5'>  */}
            <button onClick={()=>setDecreaseQuanity()}><FaMinus className='text-lg'/></button>
            <p className='text-2xl px-3'>{quantity}</p>
            <button onClick={()=>setIncreaseQuantity()}><FaPlus className='text-lg'/></button>
        {/* </div> */}
        
    </div>
  )
}

export default CartQuantityToggle