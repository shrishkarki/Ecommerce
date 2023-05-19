import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home.js";
import About from "../Pages/About.js";
import Contact from "../Pages/Contact.js";
import Products from "../Pages/Products.js";
import SingleProduct from "../Pages/SingleProduct.js";
import Cart from "../Pages/CartSection.js";
import ErrorPage from "../Components/ErrorPage/ErrorPage.js";

import Header from "../Components/Header/Header.js";
import Footer from "../Components/Footer/Footer.js";

const Routers=()=>{

 return (
    <>
    <Header/>
        <Routes>
           
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/product" element={<Products/>}/>
    <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="*" element={<ErrorPage/>}/>
</Routes>
{/* <Footer/> */}
{/* <h1>Hello world</h1> */}
</>
  
 
);
}


export default Routers;
