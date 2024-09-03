import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pl-4 pr-4">
      <h1 className="text-blue-800 text-center">Placeholder Navbar</h1> {/* placeholder for  */}
      <section className="h-96">
        <img className="h-full max-w-full object-cover" src="https://images.jackjones.com/media/3mtioscl/attack-dayz9-hero-row3-box1-sv-se.jpg?v=4b236c50-f67b-4131-86fa-82613fb0b7d1&format=webp&width=2048&quality=80&key=1-1-3" alt="jack&jones-hero" />
      </section>
      
      <section className="h-60 flex flex-col  w-full">  {/* grid grid-flow-col maintains all three <img> elements visible if they have w-full instead of set width... */}

        <h2 className="font-bebas">Summer Collection</h2>
        <div className="flex max-w-full gap-4 overflow-x-scroll">

          {/* h-full makes the images cut slightly on the width to fit, but we prefer that over not filling out the section */}
          <img className="h-full object-cover w-full" src="https://images.jackjones.com/media/0d4k0bhx/suits-dayz35-carousel-3-sv-se.jpg?v=60140033-f495-450b-8155-7c2f21c65e0f&format=webp&width=360&quality=80&key=3-2-1" alt="" />
          <img className="h-full object-cover w-full" src="https://images.jackjones.com/media/0d4k0bhx/suits-dayz35-carousel-3-sv-se.jpg?v=60140033-f495-450b-8155-7c2f21c65e0f&format=webp&width=360&quality=80&key=3-2-1" alt="" />
          <img className="h-full object-cover w-full" src="https://images.jackjones.com/media/0d4k0bhx/suits-dayz35-carousel-3-sv-se.jpg?v=60140033-f495-450b-8155-7c2f21c65e0f&format=webp&width=360&quality=80&key=3-2-1" alt="" />
        </div>

      </section>
    </main>
  );
}
