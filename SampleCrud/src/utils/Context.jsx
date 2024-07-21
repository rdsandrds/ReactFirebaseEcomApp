import axios from './axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext= createContext();

const Context = (props) => {

  const[products,setproducts] = useState(
    JSON.parse(localStorage.getItem("product")) ||  null);
  //JSON.parse(localStorage.getItem("products")) || 

  // const getproducts = async()=>{
  //   try {
  //     const {data} = await axios("/products");
  //     // console.log(data);
  //     setproducts(data);  //updating state with fetched data  //this will cause re-render of all components that use this context provider  //you can use useMemo or useCallback to optimize this part if state change is expensive
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // } 
  // useEffect(()=>{
  //   getproducts();
  // },[]) ; //fetching products only once when component mounts
//  console.log(products)
     
  return (
    <ProductContext.Provider value={[products,setproducts]}>
          {props.children}
    </ProductContext.Provider>

  )
}

export default Context