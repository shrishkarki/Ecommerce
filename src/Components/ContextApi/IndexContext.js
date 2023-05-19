import React, { useEffect, useReducer } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import ProductReducer from '../Reducer/ProductReducer';



const IndexContext=createContext();

const API='https://api.pujakaitem.com/api/products';

const IntialState={
  isError:false,
  isLoading:false,
  products:[],
  featureProduct:[],
  isSingleLoading:false,
  singleProductData:{}

}

const IndexContextProvider = ({children}) => {

  const [state,dispatch]=useReducer(ProductReducer,IntialState);


  const getProducts=async(url)=>{
    dispatch({type:"SET_LOADING"});
    try {
      const res=await axios.get(url);
      const datas=await res.data;
      // console.log(datas)
      dispatch({type:"SET_API_DATA",payload:datas})
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }

  }

//  For single products

const singleProductFn=async(url)=>{
  dispatch({type:"SINGLE_SET_LOADING"});
  try{
    const singleRes=await axios.get(url);
    const singleData=await singleRes.data;
    dispatch({type:"SET_SINGLE_DATA", payload:singleData});
  }catch(error){
    dispatch({type:"SINGLE_DATA_ERROR"});
  }
}

  useEffect(()=>{
getProducts(API);
  },[])

  return (
    <IndexContext.Provider value={{...state,singleProductFn}}>{children}</IndexContext.Provider>
  )
}

export {IndexContext,IndexContextProvider}