"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AddToBasket from "@/components/product-page-components/AddToBasket";
import ProdDescription from "@/components/product-page-components/ProdDescription";
import ProductUsp from "@/components/product-page-components/ProductUsp";
import { useParams, useRouter } from "next/navigation";
import { ProductsContext } from "@/context/productsContext";
import { useContext } from "react";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id;
  const router = useRouter();

  const { allProductsArr } = useContext(ProductsContext);
  const handleNavigation = () => {
    router.back();
  };

  const product = allProductsArr.find(
    (productObj) => productObj.id == productId
  );
  console.log(product);

  if (!product) {
    return <h1>Loading Page...</h1>;
  }

  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      <main className=" flex flex-col pl-4 pr-4">
        <div>
          <h1 className="font-bebas">product page</h1>

          <header className="h-96 max-w-full object-cover">
            {/* product image */}
            {product && (
              <img
                className="h-96 max-w-full object-cover"
                src={product.images[0]}
                alt="Failed loading image"
              />
            )}
            {/* product image */}
          </header>

          <div>
            {/* Product name */}
            <h2 className="font-normal">{product.title}</h2>
            {/* Product name */}

            {/* Product pris */}
            <h2>{product.price}kr</h2>
            {/* Product pris */}

            <div>
              <AddToBasket product={product} />
            </div>
            <div>
              <ProductUsp />
            </div>

            {/* Description */}
            <div>
              <ProdDescription description={product.description} />
            </div>
            {/* Description */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
