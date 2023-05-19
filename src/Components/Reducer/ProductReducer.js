

const ProductReducer = (state,action) => {
 
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }

        
        case "SET_API_DATA":
            const featureData=action.payload.filter((currElement)=>{
                return currElement.featured=== true;
            });

            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProduct:featureData
            }
        
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            }


        case "SINGLE_SET_LOADING":
            return{
                ...state,
                isSingleLoading:true,
               
            }

        case "SET_SINGLE_DATA":
            return{
                ...state,
                isSingleLoading:false,
                singleProductData:action.payload
               
            }

         case "SINGLE_DATA_ERROR":
            return{
                ...state,
                isSingleLoading:false,
               isError:true
               
            }

        


        default :
        return state;
    }
};

export default ProductReducer;