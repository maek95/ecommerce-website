"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function CartPage() {
  const [cart, setCart] = useState("not empty");
  const [mockCart, setMockCart] = useState([]);

  if (cart === "empty") {
    return <div>Your cart is empty</div>;
  }

  useEffect(() => {
    async function getCartProducts() {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const mockData = await response.json();
        setMockCart(mockData);
        console.log(mockData);
      } catch (error) {
        console.error("Failed to fetch mockdata:", error);
      }
    }
    getCartProducts();
  }, []);

  return (
    <main className="">
      <Navbar />
      <div className="px-8 box-border min-h-screen w-full pt-8">
        <h1 className="text-blue-700 text-xl text-bold">CART</h1>
        <ul className="p-0">
          {mockCart.map((item) => (
            <div key={item.id} className="list-none flex">
              {item.images && item.images.length > 0 && (
                <img src={item.images[0]} alt={item.title} className="w-24" />
              )}
              <li className="flex flex-col ml-4">
                <span>{item.title}</span>
                <span>{item.price} USD</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
