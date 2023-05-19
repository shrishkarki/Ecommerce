import React, { useState,useContext } from 'react';
import { FaCheck } from "react-icons/fa";
import CartQuantityToggle from './CartQuantityToggle';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../ContextApi/CartContext';


const Cart = ({ product }) => {

  const {addToCart}=useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const { id, colors, stock } = product;

  const setDecreaseQuanity = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }

  const setIncreaseQuantity = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  }

  const [color, setColor] = useState(colors[0])
  return (
    <>
      <p className='flex justify-start items-center text-slate-500 font-semibold'>
        Colors:
        {
          colors && colors.map((currEle, index) => {
            return <button key={index} className={` border-black w-8 h-8 rounded-[50%] bg-[#000] ml-4 border-none outline-none cursor-pointer ${color === currEle ? "opacity-[1]" : "opacity-[0.5]"} hover:opacity-[1] pl-2 text-white`} style={{ backgroundColor: currEle }} onClick={() => setColor(currEle)} >
              {color === currEle ? <FaCheck /> : null}
            </button>
          })
        }
      </p>

<div className='mt-3 ml-2'>
<CartQuantityToggle
        quantity={quantity}
        setDecreaseQuanity={setDecreaseQuanity}
        setIncreaseQuantity={setIncreaseQuantity} />
</div>
     

      <NavLink to="/cart" onClick={()=>addToCart(id,color,quantity,product)}>
        <button className='uppercase border-1 bg-slate-700 px-3 py-2 text-white my-3'>
          Add to Cart
        </button>
      </NavLink>

    </>

  )
}

export default Cart