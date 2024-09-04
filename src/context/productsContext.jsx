"use client"
import { getAllProducts } from "@/app/api/productsFetches";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);
 
export function ProductsProvider({children}) {

  const [allProductsArr, setAllProductsArr] = useState([]);


  useEffect(() => {

    async function fetchAllProducts() {
      const fetchedProducts = getAllProducts(); // getAllProducts() function in productsFetches.jsx (api folder)
      setAllProductsArr(fetchedProducts);
    }

    fetchAllProducts();
  }, [])

  console.log("context allProductsArr: ", allProductsArr);
  

  return (
    <ProductsContext.Provider value={allProductsArr}>
      {children}
    </ProductsContext.Provider>
  )
}