import React, { useState } from "react";

export default function AddToBasket() {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    // Här kan du lägga till logik för att lägga till produkten i kundkorgen
    setAdded(true);

    // Eventuell logik för att hantera kundkorgen, t.ex.:
    // addToCart(productId, quantity);
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 text-white ${
        added ? "bg-green-600" : "bg-blue-500"
      } rounded hover:bg-blue-700`}
    >
      {added ? "Added to Basket" : "Add to Basket"}
    </button>
  );
}
