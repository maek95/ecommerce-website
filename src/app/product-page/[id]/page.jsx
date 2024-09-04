"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AddToBasket from "@/components/product-page-components/AddToBasket";
import ProdDescription from "@/components/product-page-components/ProdDescription";
import ProductImage from "@/components/product-page-components/ProductImage";
import ProductName from "@/components/ProductName";
import ProductPris from "@/components/ProductPris";
import ProductUsp from "@/components/product-page-components/ProductUsp";
import { useParams, useRouter } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id;
  const router = useRouter();

  const handleNavigation = () => {
    router.back();
  };

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
            <ProductImage />
          </header>
          <div>
            <div>
              <ProductName />
            </div>
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
