"use client";
import { getAllProducts } from "@/app/api/productsFetches";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);

// Utility function to clean the URL
function cleanImageUrl(url) {
  if (!url) return ''; // Return an empty string if the URL is not provided

  // First, remove any unwanted characters like brackets and quotes
  let cleanedUrl = url.replace(/[\[\]"']/g, "");

  // Decode the URL if it contains encoded characters (e.g., %22)
  cleanedUrl = decodeURIComponent(cleanedUrl);

  return cleanedUrl;
}

export function ProductsProvider({ children }) {
  const [allProductsArr, setAllProductsArr] = useState([]);
  const [cartProductsArr, setCartProductsArr] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      const fetchedProducts = await getAllProducts(); // getAllProducts() function in productsFetches.jsx (api folder)

      const cleanedProducts = fetchedProducts.map((product) => (
        {
        ...product, 
        images: product.images.map(cleanImageUrl) // Remove unwanted characters surrounding the image source link (this api surround the image link with weird characters...)
      }
      ))

      setAllProductsArr(cleanedProducts);
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
