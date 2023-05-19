import React, { useContext } from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../ContextApi/CartContext';
import CartQuantityToggle from './CartQuantityToggle';

const CartItem = ({id,image,name,color,price,quantity}) => {

    const {removeCart,setDecreaseQuanity,setIncreaseQuantity}=useContext(CartContext);
  return (
    // <div className='grid grid-cols-5  py-2 items-center justify-items-center'>
    <div className='grid  grid-cols-3 md:grid-cols-5  py-2 text-center '>
        {/* item */}
        <div className='flex items-center'>
            <figure>
            <img src={image} alt="img" className='w-11 h-8 mr-1'/>
            </figure>
            <div>
                <p className='capitalize'>{name}</p>
                <div className='flex place-items-center'>
                <p className='font-semibold'>Color:</p>
                <div style={{backgroundColor:color}} className='w-4 h-4 rounded-[50%] ml-1'></div>
                </div>
               
            </div>
        </div>

        {/*Price  */}
        <div className='hidden md:flex justify-center place-items-center'>
            
            <p><FormatPrice price={price}/></p>
        </div>

        {/* quantity */}
        <div className='flex justify-center place-items-center'>
            <CartQuantityToggle
            quantity={quantity}
            setDecreaseQuanity={()=>setDecreaseQuanity(id)}
            setIncreaseQuantity={()=>setIncreaseQuantity(id)}/>
           
        </div>

        {/* sub total */}

        <div className=' hidden md:flex justify-center place-items-center'>
            <p>{<FormatPrice price={price*quantity}/>}</p>
        </div>

        {/* remove */}
        <div className='mt-1 text-red-600 flex justify-center place-items-center' onClick={()=>removeCart(id)}>
            <FaTrash/>
        </div>

    </div>
  )
}

export default CartItem