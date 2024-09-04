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

/* 
export function ProductSlidebar({children}) {

  return (
    <div className="h-full flex max-w-full gap-4 overflow-x-scroll flex-nowrap ">
      {children}
    </div>
  )
} */

export function ProductCardaa() {
  return (
    <div className="h-full w-36 flex-shrink-0  flex flex-col gap-4">
      {/* flex-shrink-0 so the ProductCard overflows the page instead of getting shrinked */}
      <img
        className="h-3/4 object-cover w-full "
        src="https://images.jackjones.com/media/0d4k0bhx/suits-dayz35-carousel-3-sv-se.jpg?v=60140033-f495-450b-8155-7c2f21c65e0f&format=webp&width=360&quality=80&key=3-2-1"
        alt=""
      />{" "}
      <div className="h-1/4 w-full flex flex-col text-sm"> {/*  gap-1 not needed due to built-in lineheight */}
        <div className="flex justify-between w-full items-center">
          <p className="p-0 m-0 w-3/4 break-words truncate">Slim Fit Chinos</p>
          <FaShoppingBasket/>
        </div>
        <p className="font-bold p-0 m-0 ">699kr</p>
        
      </div>
      {/* object-cover combined with h-full w-full makes the image get scaled and cut if needed to fit */}
    </div>
  );
}
