"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PopUpCard from "@/components/PopUpCard";

export default function TestNavPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Your page content goes here */}
        <div className="h-[100vh]"></div>
      </main>
      <PopUpCard />
      <Footer />
    </div>
  );
}
