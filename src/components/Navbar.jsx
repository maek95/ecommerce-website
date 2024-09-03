"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FiSearch,
  FiMapPin,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={navStyles} className="bg-white shadow-md border-b">
      <div style={leftContainerStyles} className="flex items-center">
        <RxHamburgerMenu
          style={iconStyles}
          className="text-2xl text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div style={brandStyles} className="text-xl font-bold text-blue-700">
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          Micke&Micke
        </Link>
      </div>
      <div
        style={rightContainerStyles}
        className="flex items-center gap-4 text-xl text-gray-700"
      >
        <FiSearch style={iconStyles} />
        <FiMapPin style={iconStyles} />
        <FiUser style={iconStyles} />
        <FiHeart style={iconStyles} />
        <FiShoppingBag style={iconStyles} />
      </div>

      {/* Burger Menu Content */}
      {isOpen && (
        <div
          style={menuStyles}
          className="absolute top-14 left-0 w-48 bg-white border rounded-lg shadow-lg p-2"
        >
          <ul className="flex flex-col">
            <ol className="py-2 px-4 hover:bg-gray-100 rounded-md">
              <Link
                href="/home"
                className="block text-blue-700 font-bold hover:underline-none"
              >
                Kläder
              </Link>
            </ol>
            <ol className="py-2 px-4 hover:bg-gray-100 rounded-md">
              <Link
                href="/about"
                className="block text-blue-700 font-bold hover:underline-none"
              >
                Nyheter
              </Link>
            </ol>
            <ol className="py-2 px-4 hover:bg-gray-100 rounded-md">
              <Link
                href="/services"
                className="block text-blue-700 font-bold hover:underline-none"
              >
                Skor
              </Link>
            </ol>
            <ol className="py-2 px-4 hover:bg-gray-100 rounded-md">
              <Link
                href="/contact"
                className="block text-blue-700 font-bold hover:underline-none"
              >
                Junior
              </Link>
            </ol>
          </ul>
        </div>
      )}
    </nav>
  );
}

// Existing inline styling retained
const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#fff",
  borderBottom: "1px solid #ddd",
};

const leftContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const brandStyles = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#0052cc",
};

const rightContainerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const iconStyles = {
  fontSize: "1.5rem",
  cursor: "pointer",
  color: "#333",
};

const menuStyles = {
  position: "absolute",
  top: "60px",
  left: "0",
  width: "200px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "10px",
};
