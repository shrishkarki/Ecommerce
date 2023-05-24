import React, { useContext, useEffect } from 'react';
import { CartContext } from '../Components/ContextApi/CartContext';
import CartItem from '../Components/AddToCart/CartItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Components/Helpers/FormatPrice';

const Cart = () => {
  const {cart,clearCart,total_amount,shipping_fee}=useContext(CartContext);

if(cart.length===0){
  return <h1 className='text-2xl text-center'>No Item added to Cart</h1>
}

// if (cart.length === 0) {
//   return (

//       <h3>No Cart in Item </h3>
   
//   );
// }




  return (
   
<div className='px-4 sm:px-[1.6rem] mdlg:px-[5.5rem] lg:px-36 xl:px-48 pt-10'>
<div className='grid grid-cols-3 md:grid-cols-5 items-center justify-items-center  text-zinc-600 font-medium py-2'>
      <p>Item</p>
      <p className='hidden md:block'>Price</p>
      <p>Quantity</p>
      <p  className='hidden md:block'>Subtotal</p>
      <p>Remove</p>
    </div>

<div className='border-[0.5px] w-full border-solid border-zinc-600'></div>

<div>
  {
    cart && cart.map((currEle)=>{
      return <CartItem key={currEle.id} {...currEle}/>
    })
  }
</div>


<div className='border-[0.5px] w-full border-solid border-zinc-600'></div>

<div className='flex justify-between mt-3'>
  <NavLink to="/product">
    <button className='px-2 sm:px-3 py-2 text-xs sm:text-base bg-slate-500 hover:bg-slate-400 text-white'>Continue Shopping</button>
  </NavLink>
  <button onClick={clearCart} className='px-2 sm:px-3  py-1 sm:py-2 text-xs sm:text-base bg-red-500 hover:bg-red-400 text-white'>Clear Cart</button>
</div>


{/* subtotal */}
<div className=" w-full capitalize flex justify-end items-end my-4 md:my-8 text-sm sm:text-base">
          <div className=" flex  flex-col border-[0.1rem] border-solid border-[#f0f0f0] gap-3 md:gap-6 py-4 md:py-8 px-2 md:px-4">
            <div className='flex gap-4 mdlg:gap-8 justify-between'>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_amount} />
              </p>
            </div>
            <div className='flex gap-4 mdlg:gap-8 justify-between'>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div className='flex gap-4 mdlg:gap-8 justify-between text-lime-500 font-bold'>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_amount} />
              </p>
            </div>
          </div>
        </div>
        </div>
    
   
  )
}

export default Cart