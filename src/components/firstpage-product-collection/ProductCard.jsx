/* import { FaShopingCart } from "react-icons/FontAwesome" */
import Link from "next/link";
import { FaShoppingBasket } from "react-icons/fa";




export default function ProductCard({title = "No Title", price = 0, imgSrc = "https://images.jackjones.com/media/0d4k0bhx/suits-dayz35-carousel-3-sv-se.jpg?v=60140033-f495-450b-8155-7c2f21c65e0f&format=webp&width=360&quality=80&key=3-2-1", productId}) {

  if (!productId) {
    return (
      <div className="h-full w-36 flex-shrink-0  flex flex-col gap-4">
        Loading...
      </div>
    )
  }

  return (
    <div className="h-full w-36 flex-shrink-0  flex flex-col gap-4">
      {/* flex-shrink-0 so the ProductCard overflows the page instead of getting shrinked */}
      <Link href={`/product-page/${productId}`} className="h-3/4 w-full">
        <img
          className="h-full object-cover w-full "
          src={`${imgSrc}`}
          alt="imgSrc failed"
          onError={(e) => {
            // Prevent infinite loops if the fallback image fails too
            e.target.onerror = null; // Remove the error handler after first execution
            e.target.src = "https://images.jackjones.com/12263083/4573159/001/jackjones-plussizeteddyjacket-black.png?v=681cb536087b86d48a22e75070fb4bf3&format=webp&width=1280&quality=90&key=25-0-3";
          }}
        />{" "}
      </Link>
      <div className="h-1/4 w-full flex flex-col text-sm"> {/*  gap-1 not needed due to built-in lineheight */}
        <div className="flex justify-between w-full items-center">
          <p className="p-0 m-0 w-3/4 break-words truncate">{title}</p>
          <FaShoppingBasket/>
        </div>
        <p className="font-bold p-0 m-0 ">{price}</p>
        
      </div>
      {/* object-cover combined with h-full w-full makes the image get scaled and cut if needed to fit */}
    </div>
  );
}
