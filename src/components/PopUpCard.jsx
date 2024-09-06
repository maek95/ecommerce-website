"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PopUpCard({ product, setPopupVisible }) {
  const router = useRouter();

  const handleBuyClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  const goToProductPage = () => {
    router.push(`/product-page/${product.id}`); // Navigate to the product page
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={closePopup}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg transform scale-0 animate-grow"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p>{product.description}</p>
          <button
            onClick={closePopup}
            className="mt-4  bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded"
          >
            Close
          </button>
          <button
            className="mt-4 bg-blue-500 ml-1 hover:bg-blue-400 text-white px-4 pl-6 py-2 rounded"
            onClick={goToProductPage}
          >
            Go to Product Page
          </button>
        </div>
      </div>
    </div>
  );
}
