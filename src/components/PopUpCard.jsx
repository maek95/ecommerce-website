"use client";

import { useState } from "react";

export default function PopUpCard() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleBuyClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <button
        onClick={handleBuyClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Buy
      </button>

      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg transform scale-0 animate-grow"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold">Product Title</h2>
            <p>Product details go here...</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
