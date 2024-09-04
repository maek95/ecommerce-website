"use client";
import { getAllProducts } from "@/app/api/productsFetches";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [allProductsArr, setAllProductsArr] = useState([]);
  const [cartProductsArr, setCartProductsArr] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      const fetchedProducts = await getAllProducts(); // getAllProducts() function in productsFetches.jsx (api folder)
      setAllProductsArr(fetchedProducts);
    }

    fetchAllProducts();
  }, []);

  const addToCart = (product) => {
    setCartProductsArr((prevCartProducts) => [...prevCartProducts, product]);
  };

  const removeFromCart = (productId) => {
    setCartProductsArr((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== productId)
    );
  };

  // console.log("context allProductsArr: ", allProductsArr);
  useEffect(() => {

    console.log("context allProductsArr: ", allProductsArr);
  }, [allProductsArr])

  return (
    <ProductsContext.Provider
      value={{ allProductsArr, cartProductsArr, addToCart, removeFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
