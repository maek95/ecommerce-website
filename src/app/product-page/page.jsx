"use client";
import Navbar from "@/components/Navbar";
import AddToBasket from "@/components/product-page-components/AddToBasket";
import ProdDescription from "@/components/product-page-components/ProdDescription";
import ProductImage from "@/components/product-page-components/ProductImage";

export default function productpage() {
  //const productpage = () => {};

  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      <main className=" flex flex-col pl-4 pr-4">
        <div>
          <h1 className="font-bebas">product page</h1>
          <header className="bg-slate-300 ">
            <ProductImage />
          </header>
          <div>
            <div>
              <p>fetch product name by ID</p>
            </div>
            <div>
              <p>fetch product price by ID</p>
            </div>
            <div>
              <AddToBasket />
            </div>
            <div>
              <p>product usp</p>
            </div>
            <div>
              <ProdDescription />
            </div>
          </div>
        </div>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
        <footer className="bg-orange-500 ">
          <p>Footer</p>
        </footer>
      </main>
    </div>
  );
}
