import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { IndexContextProvider } from './Components/ContextApi/IndexContext';
import { FilterProductContext } from './Components/ContextApi/FilterProductContext';
import { CartProvider } from './Components/ContextApi/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <IndexContextProvider>
        <FilterProductContext>
            <CartProvider>
                <Router>
                    <App />
                </Router>
            </CartProvider>
        </FilterProductContext>
    </IndexContextProvider>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
