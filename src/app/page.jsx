import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pl-4 pr-4">
      <h1 className="text-blue-800 text-center">Placeholder Navbar</h1>{" "}
      {/* placeholder for  */}
      <section className="h-96">
        <img
          className="h-full max-w-full object-cover"
          src="https://images.jackjones.com/media/3mtioscl/attack-dayz9-hero-row3-box1-sv-se.jpg?v=4b236c50-f67b-4131-86fa-82613fb0b7d1&format=webp&width=2048&quality=80&key=1-1-3"
          alt="jack&jones-hero"
        />
      </section>
      <section className="h-96 flex flex-col gap-4 w-full pt-4">
        {" "}
        {/* grid grid-flow-col maintains all three <img> elements visible if they have w-full instead of set width... */}
        <h2 className="font-bebas p-0 m-0 leading-0">Summer Collection</h2>
        <div className="h-full flex max-w-full gap-4 overflow-x-scroll flex-nowrap ">
          {" "}
          {/* flex-nowrap needed for ProductCards to overflow */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
