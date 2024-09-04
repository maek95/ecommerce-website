import { useContext } from "react";
import { ProductsContext } from "@/context/productsContext";

export default function ProductName() {
  const { allProductsArr } = useContext(ProductsContext);

  return (
    allProductsArr &&
    allProductsArr.length > 0 &&
    allProductsArr.map((productObj) => {
      return <div>{productObj.title} </div>;
    })
  );
}
