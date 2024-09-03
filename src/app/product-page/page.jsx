"use client";
import Navbar from "@/components/Navbar";
import AddToBasket from "@/components/product-page-components/AddToBasket";
import ProdDescription from "@/components/product-page-components/ProdDescription";

export default function productpage() {
  //const productpage = () => {};

  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      <main className=" flex flex-col pl-4 pr-4">
        <div>
          <h1 className="font-bebas">product page</h1>
          <header className="bg-white border-solid border-2 border-black">
            <img
              className="h-full max-w-full object-cover"
              alt="Jack &amp; Jones Plus Size Teddy jacket -Black - 12263083"
              src="https://images.jackjones.com/12263083/4573159/001/jackjones-plussizeteddyjacket-black.png?v=681cb536087b86d48a22e75070fb4bf3&amp;format=webp&amp;width=1280&amp;quality=90&amp;key=25-0-3"
            ></img>
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
