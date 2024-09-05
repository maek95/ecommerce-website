import { useState, useContext } from "react";
import { ProductsContext } from "@/context/productsContext";

export default function AddToBasket({ product }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(ProductsContext);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    console.log("added product to cart");
    console.log(product);

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
