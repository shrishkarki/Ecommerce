import React, { useContext } from 'react';
import {BsFillGridFill,BsList} from "react-icons/bs";
import { FilterContext } from '../ContextApi/FilterProductContext';


const ProductSort = () => {
  const {setGridView,setListView,grid_view,filter_products,sorting}=useContext(FilterContext);
  return (
    <div className='flex justify-between py-5 px-7'>
      <div className='flex '>
        <button onClick={setGridView}><BsFillGridFill className={`w-8 h-8  px-2 py-1 mr-5 ${grid_view?"bg-slate-500 text-white":null}`}/></button>
        <button onClick={setListView}><BsList className={`w-8 h-8  px-2 py-1 mr-5 ${!grid_view?"bg-slate-500 text-white":null}`}/></button>
    
      </div>
      <div>
        <p>{filter_products.length} products available</p>
      </div>

      <div>
        <form>
          <label htmlFor='sort'></label>
          <select id='sort' name='sort' className='border-2 border-black' onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>

        </form>
      
      </div>
    </div>
  )
}

export default ProductSort