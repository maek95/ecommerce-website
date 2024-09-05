"use client";

import ProductCard from "./ProductCard";
import ProductSlidebar from "./ProductSlidebar";

export default function ProductCollectionSection({
  sectionName = "Placeholder Collection",
  categorizedProductsArr = [],
}) {
  // moved to startpage and send products from a category instead
  //const { allProductsArr, categoryProductsArr } = useContext(ProductsContext);
  console.log("categorizedProductsArr:", categorizedProductsArr);

  return (
    <section className="h-96 flex flex-col gap-4 w-full pl-4 pr-4 box-border">
      <h2 className="font-bebas p-0 m-0 leading-0">{sectionName}</h2>
      <ProductSlidebar>
        {categorizedProductsArr &&
          categorizedProductsArr.length > 0 &&
          categorizedProductsArr.map((productObj, index) => {
            return (
              <ProductCard
                key={index}
                productId={productObj.id}
                title={productObj.title}
                price={productObj.price}
                imgSrc={productObj.images[0]}
                productObj={productObj}
              />
            );
          })}
      </ProductSlidebar>
    </section>
  );
}
