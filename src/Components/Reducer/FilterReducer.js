import React from 'react'

const FilterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":

        let priceArray=action.payload.map((currEle)=>currEle.price);

        let maxPrice=Math.max(...priceArray);

       
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{...state.filters,maxPrice:maxPrice,price:maxPrice}
            }

            case "SET_GRID_VIEW":
                return {
                    ...state,
                   grid_view:true
                }

            case "SET_LIST_VIEW":
                return{
                    ...state,
                    grid_view:false
                }

            case "GET_SORT_VALUE":
                let clientSortValue=document.getElementById("sort").value;
                // let sort_value=clientSortValue.options[clientSortValue.selectedIndex].value;
                return{
                    ...state,
                    sort_value:clientSortValue
                     // sort_value:sort_value
                }

            case "SORTING_PRODUCTS":
                let newSortedData;
                let tempSortProduct=[...action.payload];
                

                if(state.sort_value==="lowest"){
                    const sortingProducts=(a,b)=>{
                        return a.price-b.price
                    }
                    newSortedData=tempSortProduct.sort(sortingProducts);
                   
                }

                if(state.sort_value==="highest"){
                    const sortingProducts=(a,b)=>{
                        return b.price-a.price
                    }
                    newSortedData=tempSortProduct.sort(sortingProducts);
                   
                }
                // alphabet acessending order
                if(state.sort_value==="a-z"){
                    newSortedData=tempSortProduct.sort((a,b)=>{
                        return a.name.localeCompare(b.name);
                    })
                }

                if(state.sort_value==="z-a"){
                    newSortedData=tempSortProduct.sort((a,b)=>{
                        return b.name.localeCompare(a.name);
                    })
                }

                return{
                    ...state,
                    filter_products:newSortedData
                }

            
            case "UPDATE_FILTER_VALUE":
                const {name,value}=action.payload;
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value,
                    
                }
            }


            case "FILTER_PRODUCTS":
               
                let {all_products}=state;
                let tempFilterProduct=[...all_products];
                let {text, category,company,color,price}=state.filters;
               

                if(text){
                    tempFilterProduct=tempFilterProduct.filter((currEle)=>{
                        return currEle.name.toLowerCase().includes(text);
                    })
                    
                   
                }
               
                if(category !== "all"){
                    tempFilterProduct=tempFilterProduct.filter((currEle)=>{
                        return currEle.category===category
                    })

                   
                }

                if(company !== "all"){
                    tempFilterProduct=tempFilterProduct.filter((currEle)=>{
                        return currEle.company.toLowerCase()===company.toLowerCase()
                    })

                   
                }

                if(color !== "all"){
                    tempFilterProduct=tempFilterProduct.filter((currEle)=>{
                        return currEle.colors.includes(color)
                    })
                }


                if(price){
                    tempFilterProduct=tempFilterProduct.filter((currEle)=>currEle.price<=price)
                }

                console.log(tempFilterProduct)
                return{
                    ...state,
                    filter_products:tempFilterProduct
                }


            

            case "CLEAR_FILTERS":
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        text:"",
                        category:"all",
                        company:"all",
                        color:"all",
                        maxPrice:state.filters.maxPrice,
                        price:state.filters.maxPrice,
                        minPrice:state.filters.minPrice
                    }
                }


               

               



            default:
                return state;

    }
    // return (
    //     <div>FilterReducer</div>
    // )
}

export default FilterReducer