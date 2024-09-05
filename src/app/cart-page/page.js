"use client";

import { useContext } from "react";
import Navbar from "@/components/Navbar";
import { ProductsContext } from "@/context/productsContext";
import Footer from "@/components/Footer";
import { RxCross2 } from "react-icons/rx";

export default function CartPage() {
  const { cartProductsArr } = useContext(ProductsContext);

  if (cartProductsArr.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="px-8 box-border pt-8 flex flex-col w-full gap-4">
        <h1 className="text-blue-700 text-xl cart-title">CART</h1>
        <ul className="p-0">
          {cartProductsArr.map((product) => (
            <li key={product.id} className="list-none list-items">
              <div className="flex flex-row">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{product.title}</span>
                    <span className="text-xs">
                      Article number:&nbsp;{product.id}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <button className="flex bg-transparent border-none text-xl">
                      <RxCross2 />
                    </button>
                    <span className="pr-6 pt-2">{product.price}&nbsp;kr</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
