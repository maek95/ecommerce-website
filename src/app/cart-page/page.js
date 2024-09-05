"use client";

import { useContext } from "react";
import Navbar from "@/components/Navbar";
import { ProductsContext } from "@/context/productsContext";

export default function CartPage() {
  const { cartProductsArr } = useContext(ProductsContext);

  if (cartProductsArr.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <main className="">
      <Navbar />
      <div className="px-8 box-border min-h-screen w-full pt-8">
        <h1 className="text-blue-700 text-xl text-bold">CART</h1>
        <ul className="p-0">
          {cartProductsArr.map((product) => (
            <li key={product.id}>
              <div>
                <span>{product.title}</span>
                <span>{product.price}kr</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
