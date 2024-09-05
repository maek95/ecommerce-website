"use client"
import { FaShoppingBasket } from "react-icons/fa";

import ProductCard from "./ProductCard";
import ProductSlidebar from "./ProductSlidebar";
import { useContext } from "react";
import { ProductsContext } from "@/context/productsContext";


export default function ProductCollectionSection({sectionName = "Placeholder Collection"}) {

  const { allProductsArr } = useContext(ProductsContext);

 // console.log("ProductCollectionSection received allProductsArr from productsContext: ", allProductsArr);
  
   
  return (
    <section className="h-96 flex flex-col gap-4 w-full pl-4 pr-4 box-border">
      <h2 className="font-bebas p-0 m-0 leading-0">{sectionName}</h2>
      <ProductSlidebar>
        
        {allProductsArr && allProductsArr.length > 0 && allProductsArr.map((productObj, index) => {
          return <ProductCard key={index} productId={productObj.id} title={productObj.title} price={productObj.price} imgSrc={productObj.images[0]}/>
        })}
      </ProductSlidebar>
    </section>
  )
}
