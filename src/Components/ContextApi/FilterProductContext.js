import React, { createContext, useContext, useEffect, useReducer } from 'react';
import FilterReducer from '../Reducer/FilterReducer';
import { IndexContext } from './IndexContext';


const FilterContext = createContext();


const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sort_value: "lowest",
    filters:{
        text:"",
        category:"all",
        company:"all",
        color:"all",
        maxPrice:0,
        price:0,
        minPrice:0
    }
}

const FilterProductContext = ({ children }) => {
    const { products } = useContext(IndexContext);


    const [state, dispatch] = useReducer(FilterReducer, initialState);


    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    }

    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    }

    const sorting = () => {
        return dispatch({ type: "GET_SORT_VALUE" });
    }

    const clearFilters=()=>{
        return dispatch({type:"CLEAR_FILTERS"});
    }

    const updateFilterValue=(event)=>{
        const name=event.target.name;
        const value=event.target.value;

        return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
    }

    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"});
    },[state.filters]);


    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: state.filter_products })
       
       
    }, [products, state.sort_value])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>{children}</FilterContext.Provider>
    )
}

export { FilterProductContext, FilterContext }