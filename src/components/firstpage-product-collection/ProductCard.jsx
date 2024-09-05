"use client";
import { ProductsContext } from "@/context/productsContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { FaShoppingBasket } from "react-icons/fa"; // Re-added the missing import

export default function ProductCard({
  title = "No Title",
  price = 0,
  imgSrc = "https://images.jackjones.com/media/0d4k0bhx/suits-dayz35-carousel-3-sv-se.jpg?v=60140033-f495-450b-8155-7c2f21c65e0f&format=webp&width=360&quality=80&key=3-2-1",
  productId,
  productObj,
}) {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { addToCart } = useContext(ProductsContext);
  const router = useRouter(); // Corrected import

  if (!productId) {
    return (
      <div className="h-full w-36 flex-shrink-0 flex flex-col gap-4">
        Loading...
      </div>
    );
  }

  function handleClickCart() {
    addToCart(productObj);
    setIsCartClicked(true);

    setTimeout(() => setIsCartClicked(false), 500);
  }

  const handleProductClick = () => {
    setPopupVisible(true);
  };

  const goToProductPage = () => {
    router.push(`/product-page/${productId}`); // Navigate to the product page
  };

  return (
    <div className="h-full w-36 flex-shrink-0 flex flex-col gap-4">
      <div onClick={handleProductClick} className="h-3/4 w-full cursor-pointer">
        <img
          className="h-full object-cover w-full"
          src={`${imgSrc}`}
          alt="imgSrc failed"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = productObj.category.image;
          }}
        />
      </div>

      <div className="h-1/4 w-full flex flex-col text-sm">
        <div className="flex justify-between w-full items-center">
          <p className="p-0 m-0 w-3/4 break-words truncate">{title}</p>
          <FaShoppingBasket
            className={`${isCartClicked ? "animate-impact" : ""}`}
            onClick={handleClickCart}
          />
        </div>
        <p className="font-bold p-0 m-0 ">{price}</p>
      </div>

      {/* PopUpCard rendered conditionally */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={goToProductPage} // Clicking outside will go to the product page
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-lg font-bold">{title}</h2>
            <p>Product details go here...</p>
            <button
              onClick={goToProductPage} // Redirects to the product page
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Go to Product Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
