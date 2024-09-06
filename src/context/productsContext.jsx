"use client";
import { getAllProducts } from "@/app/api/productsFetches";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [allProductsArr, setAllProductsArr] = useState([]);
  const [cartProductsArr, setCartProductsArr] = useState([]);
  const [categoryProductsArr, setCategoryProductsArr] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      const fetchedProducts = await getAllProducts(); // getAllProducts() function in productsFetches.jsx (api folder)

      const cleanedProducts = fetchedProducts.map((product) => ({
        ...product,
        images: product.images.map(cleanImageUrl), // Remove unwanted characters surrounding the image source link (this api surround the image link with weird characters...)
      }));

      setAllProductsArr(cleanedProducts);
    }

    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (allProductsArr.length > 0) {
      const productCategories = groupProductsByCategory(allProductsArr);
      setCategoryProductsArr(productCategories);
    }
  }, [allProductsArr]);

  const addToCart = (product) => {
    setCartProductsArr((prevCartProducts) => {
      // updatedCart är den uppdaterade listan
      const updatedCart = [...prevCartProducts, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCartProductsArr((prevCartProducts) => {
      // updatedCart är den nya listan
      const updatedCart = prevCartProducts.filter(
        (product) => product.id !== productId
      );
      // uppdatera localStorage efter borttagning av vara
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // console.log("context allProductsArr: ", allProductsArr);
  useEffect(() => {
    console.log("context allProductsArr: ", allProductsArr);
  }, [allProductsArr]);

  useEffect(() => {
    console.log("context categoryProductsArr: ", categoryProductsArr);
  }, [categoryProductsArr]);

  return (
    <ProductsContext.Provider
      value={{
        allProductsArr,
        cartProductsArr,
        addToCart,
        removeFromCart,
        categoryProductsArr,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

// Utility function to clean the URL
function cleanImageUrl(url) {
  if (!url) return ""; // Return an empty string if the URL is not provided

  // First, remove any unwanted characters like brackets and quotes
  let cleanedUrl = url.replace(/[\[\]"']/g, "");

  // Decode the URL if it contains encoded characters (e.g., %22)
  cleanedUrl = decodeURIComponent(cleanedUrl);

  return cleanedUrl;
}

// sort products into categories, sorting them into category arrays 1, 2, 3...
// category name (for display) can be extracted from the product objects.
function groupProductsByCategory(products) {
  const productCategories = [];

  products.forEach((product) => {
    const categoryId = product.category.id;
    const categoryName = product.category.name;

    let category = productCategories.find(
      (category) => category.categoryId == categoryId
    );

    if (!category) {
      // if category doesnt exist we will create it
      category = {
        categoryId,
        categoryName,
        products: [], // initalize with an empty array
      };
      productCategories.push(category); // push new category to groupedProducts array
    }

    // now that the category exists we can push in the product
    category.products.push(product);
  });

  return productCategories;
}
