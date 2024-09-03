"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TestNavPage() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="h-[100vh]"></div>
      </main>
      <div
        ref={footerRef}
        className={`${
          isFooterVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <Footer />
      </div>
    </div>
  );
}
