/* import { FaShopingCart } from "react-icons/FontAwesome" */
import { FaShoppingBasket } from "react-icons/fa";




export default function ProductCard({title = "No Title", price = 0, imgSrc = "https://images.jackjones.com/media/0d4k0bhx/suits-dayz35-carousel-3-sv-se.jpg?v=60140033-f495-450b-8155-7c2f21c65e0f&format=webp&width=360&quality=80&key=3-2-1"}) {

  
  

  return (
    <div className="h-full w-36 flex-shrink-0  flex flex-col gap-4">
      {/* flex-shrink-0 so the ProductCard overflows the page instead of getting shrinked */}
      <img
        className="h-3/4 object-cover w-full "
        src={`${imgSrc}`}
        alt="imgSrc failed"
      />{" "}
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
