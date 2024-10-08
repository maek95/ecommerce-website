"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCollectionSection from "@/components/firstpage-product-collection/ProductCollectionSection";
import { ProductsContext } from "@/context/productsContext";
import { useContext } from "react";

export default function Home() {
  const { categoryProductsArr } = useContext(ProductsContext);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="flex flex-col w-full gap-4 pt-4">
        <section className="flex h-96 pl-4 pr-4 w-full box-border lg:justify-center">
          {" "}
          {/* box-border otherwise padding extends the page when calculating w-full */}
          <img
            className="h-full max-w-full object-cover"
            src="https://images.jackjones.com/media/3mtioscl/attack-dayz9-hero-row3-box1-sv-se.jpg?v=4b236c50-f67b-4131-86fa-82613fb0b7d1&format=webp&width=2048&quality=80&key=1-1-3"
            alt="jack&jones-hero"
          />
        </section>

        {/* maybe better to have a set amount of categories? */}
        <section className="min-h-96">

          {categoryProductsArr && categoryProductsArr.length > 0 ? 
            (categoryProductsArr.map((categorizedProducts) => {
              console.log("category: ", categorizedProducts);
              return (
                <ProductCollectionSection
                  key={categorizedProducts.categoryId} // Add a unique key for each section
                  sectionName={categorizedProducts.categoryName}
                  categorizedProductsArr={categorizedProducts.products}
                />
              );
            }) ): (
            <div className="w-full pl-4 pr-4">
              Loading Category... {/* TODO: fix skeleton loader? */}
            </div>)}
        </section>
        {/*  <ProductCollectionSection />
        <ProductCollectionSection sectionName="custom name"/>
        <ProductCollectionSection sectionName="micke's clothes"/> */}
      </main>
      <Footer />
    </div>
  );
}
