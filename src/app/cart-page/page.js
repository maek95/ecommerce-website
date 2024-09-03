"use client";

import { useState, useEffect } from "react";

export default function CartPage() {
  const [cart, setCart] = useState("not empty");
  const [mockCart, setMockCart] = useState([]);

  if (cart === "empty") {
    return <div>Your cart is empty</div>;
  }

  useEffect(() => {
    async function getMockData() {
      try {
        const response = await fetch("/mockdata.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const mockData = await response.json();
        setMockCart(mockData);
      } catch (error) {
        console.error("Failed to fetch mockdata:", error);
      }
    }
    getMockData();
  }, []);

  return (
    <main>
      <h1>Cart</h1>
      <ul>
        {mockCart.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.color}
            <img src="mock-img.webp" className="w-24"></img>
          </li>
        ))}
      </ul>
    </main>
  );
}
