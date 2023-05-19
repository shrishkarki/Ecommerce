

const CartReducer = (state,action) => {


  if(action.type==="ADD_TO_CART"){
    let {id,color,quantity,product}=action.payload;

    let isProductExist=state.cart && state.cart.find((currEle)=>currEle.id===id+color);
    
    if(isProductExist){
      let updateProduct=state.cart && state.cart.map((currEle)=>{
        if(currEle.id===id+color){
          let newQuantity=currEle.quantity+quantity;
           return {
            ...currEle,
            quantity:newQuantity>currEle.max?currEle.max:newQuantity
           }
        }
        else{
          return currEle;
        }
        
      });

      return{
        ...state,
        cart:updateProduct
      }

    }
    else{
      let cartProduct={
        id:id+color,
        color,
        quantity,
        name:product.name,
        image:product.image[0].url,
        price:product.price,
        max:product.stock
      }
    
      return {
        ...state,
        cart:[...state.cart,cartProduct]
      }
    }

    
  }

  if(action.type==="REMOVE_CART"){
    let newCartArr=state.cart && state.cart.filter((currEle)=>currEle.id !== action.payload);
    return {
      ...state,
      cart:newCartArr
    }
  }

  if(action.type==="CLEAR_CART"){
    return{
      ...state,
      cart:[]

    }
  }


  // increase and decrease quantity

  if(action.type==="DECREASE_QUANTITY"){
 
    let updateProducts=state.cart && state.cart.map((currEle)=>{
        if(currEle.id===action.payload){
          let decQuantity=currEle.quantity-1;

          if(decQuantity<=1){
            decQuantity=1
          }

          return{
            ...currEle,
            quantity:decQuantity
          }

        
        }
        else{
          return currEle
        }
        
    });

    return{
      ...state,
      cart:updateProducts
    }
  }



  if(action.type==="INCREASE_QUANTITY"){
  
    let updateProducts= state.cart && state.cart.map((currEle)=>{
     
        if(currEle.id===action.payload){
          let incQuantity=currEle.quantity + 1;
           if(incQuantity>=currEle.max)
           {
            incQuantity=currEle.max
           }
          return{
            ...currEle,
            quantity:incQuantity
          }

        
        }
        else{
          return currEle
        }
    });

    return{
      ...state,
      cart:updateProducts
    }
  }


  if(action.type==="TOTAL_CART_QUANTITY"){
    let updateCartItem=state.cart && state.cart.reduce((initialValue,currEle)=>{
      let {quantity}=currEle;

      initialValue=initialValue+quantity;

      return initialValue;
    },0);

    return{
      ...state,
      total_item:updateCartItem
    }
  }

  if(action.type==="TOTAL_AMOUNT"){
    let updateTotalAmount=state.cart && state.cart.reduce((initialValue,currEle)=>{
      let {quantity,price}=currEle;
       initialValue=initialValue+(quantity*price);
      return initialValue;
    },0);

    return{
      ...state,
      total_amount:updateTotalAmount
    }
  }

  
}

export default CartReducer