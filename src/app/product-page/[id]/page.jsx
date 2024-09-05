"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AddToBasket from "@/components/product-page-components/AddToBasket";
import ProdDescription from "@/components/product-page-components/ProdDescription";
import ProductName from "@/components/ProductName";
import ProductPris from "@/components/ProductPris";
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

  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      <main className=" flex flex-col pl-4 pr-4">
        <div>
          <h1 className="font-bebas">product page</h1>

          {/* dynamic router */}
          <div>{productId && <h1>hejhejhej {productId}</h1>}</div>
          {/* dynamic router */}

          <header className="bg-slate-300 ">
            {product && (
              <img
                className="h-full max-w-full object-cover"
                src={product.images[0]}
                alt=""
              />
            )}
          </header>
          <div>
            {product && <div>name: {product.title}</div>}
            <div>
              <ProductPris />
            </div>
            <div>
              <AddToBasket />
            </div>
            <div>
              <ProductUsp />
            </div>
            <div>
              <ProdDescription />
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
