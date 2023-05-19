import React, { useContext } from 'react';
import { FilterContext } from '../ContextApi/FilterProductContext';
import { FaCheck } from 'react-icons/fa';
import FormatPrice from '../Helpers/FormatPrice';


const ProductFilter = () => {
  const { filters:{text,color,maxPrice,price,minPrice,category,company}, updateFilterValue ,all_products ,clearFilters}=useContext(FilterContext);



  const getUniqueData=((products,property)=>{
      let newVal=products.map((currEle)=>{
        return currEle[property];
      });

      if(property==="colors"){
        newVal=newVal.flat();
      }
      
      return(newVal=['all',...new Set(newVal)]);
  })

  // for unique data
  const categoryData=getUniqueData(all_products,"category");
  const companyData=getUniqueData(all_products,"company");
  const colorsData=getUniqueData(all_products,"colors");



  // console.log(categoryData)
  return (
    // search
    <div className=' w-full  pt-6'>
      <form onSubmit={(e)=>e.preventDefault()} >
        <input type='text' name='text' value={text} onChange={updateFilterValue} className='border-2  border-black block' placeholder='SEARCH'/>
      </form>
{/* category */}
      <div className='mt-9'>
        <p className='font-bold mb-1'>Category</p>
        <div  className='flex flex-col  items-start'>
        {
          categoryData.map((currEle,index)=>{
            return <button key={index} type='button' name="category" value={currEle} onClick={updateFilterValue} className={`capitalize mt-1 ${currEle===category?"underline underline-offset-2 text-amber-500 font-semibold":null} `}>{currEle}</button>
          })
        }
        </div>

        </div>
{/* company */}
        <div className='mt-4'>
          <p className='font-bold'>Company</p>
          <form>
            <select name="company" id="company" onClick={updateFilterValue} className='outline-none border-solid border-2 border-slate-600 my-2 capitalize'>
            {
              companyData.map((currEle,index)=>{

                // if(currEle==="all"){
                //   return <option value={currEle} name="company" key={index} className='capitalize'>All</option>
                // }
                
                return <option value={currEle} name="company" key={index} selected={currEle===company? true : false} >{currEle}</option>
              })
            }
            </select>
           
          </form>
        </div>
            {/* colors */}
        <div className='mt-4'>
            <p className='font-bold'>Colors</p>
            <div className='flex justify-start items-center my-3 pl-2'>
              {
                colorsData.map((currEle,index)=>{
                  if(currEle==="all"){
                    return(
                      <button key={index} name='color' value={currEle}   onClick={updateFilterValue} className={`${currEle===color?"underline text-orange-400 font-semibold":null}`}>
                   All
                  </button>
                    )
                  }


                  return <button key={index} name='color' value={currEle}  className={` border-black w-6 h-5 rounded-[50%] ml-2 border-none outline-none cursor-pointer ${color===currEle? "opacity-[1]":"opacity-[0.5]"} hover:opacity-[1] pl-1 text-white`} style={{backgroundColor:currEle}} onClick={updateFilterValue} >
                      {color===currEle ?<FaCheck />:null}  
                  </button>
              })
              }
            </div>
        </div>

        {/* price sllider */}
        <div className='mt-4'>
          <p className='font-bold'>Price</p>
          <p className='text-green-600 font-medium text-sm my-2'><FormatPrice price={price}/></p>
          {console.log(price)}
          <input type='range' min={minPrice} max={maxPrice} value={price} name="price" onChange={updateFilterValue}/>
        </div>

        {/* clear filter button */}
        <div className='mt-8 '>
          <button onClick={clearFilters} className='w-32 bg-slate-400 py-2 text-white hover:bg-slate-500'>Clear Filter</button>
        </div>
        
      
      </div>
  )
}

export default ProductFilter