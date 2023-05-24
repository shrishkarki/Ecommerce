import { createContext, useEffect, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer";

const CartContext=createContext();


const getLocalCartData=()=>{
  let localCartData=localStorage.getItem("CartItem");

//   if(localCartData===[]){
//     return [];
//   }
// else{
//   return JSON.parse(localCartData);
// }

const parsedData=JSON.parse(localCartData);
if(!Array.isArray(parsedData)) return [];
return parsedData;
};


const InitialState={
  cart:getLocalCartData(),
  total_item:"",
  total_amount:"",
  shipping_fee:50000
};



const CartProvider=({children})=>{

  const [state,dispatch]=useReducer(CartReducer,InitialState)


  const addToCart=(id,color,quantity,product)=>{

    return dispatch({type:"ADD_TO_CART",payload:{id,color,quantity,product}})

  }

  const removeCart=(id)=>{
    return dispatch({type:"REMOVE_CART",payload:id})
  }

  const clearCart=()=>{
    return dispatch({type:"CLEAR_CART"})
  }


  // increament and decreament cart

  const setDecreaseQuanity=(id)=>{
    
    return dispatch({type:"DECREASE_QUANTITY",payload:id});
  };

  const setIncreaseQuantity=(id)=>{
   
    return dispatch({type:"INCREASE_QUANTITY",payload:id});
  }


 useEffect(()=>{
  dispatch({type:"TOTAL_CART_QUANTITY"});
  dispatch({type:"TOTAL_AMOUNT"});
 localStorage.setItem("CartItem",JSON.stringify(state.cart));
 },[state.cart]);



  return <CartContext.Provider value={{...state,addToCart,removeCart,clearCart,setDecreaseQuanity,setIncreaseQuantity}}>{children}</CartContext.Provider>
}

export {CartContext, CartProvider}