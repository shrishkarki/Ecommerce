import React, { useContext } from 'react';
import { FilterContext } from '../ContextApi/FilterProductContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductSection = () => {
    const {filter_products,grid_view}=useContext(FilterContext);
    // console.log(filter_products);
    if(grid_view===true){
        return <GridView products={filter_products}/>
    }
    if(grid_view===false){
        return <ListView products={filter_products}/>
    }
 
}

export default ProductSection