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
    <nav style={navStyles}>
      <div style={leftContainerStyles}>
        <RxHamburgerMenu style={iconStyles} onClick={toggleMenu} />
      </div>
      <div style={brandStyles}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          E-commerce
        </Link>
      </div>
      <div style={rightContainerStyles}>
        <FiSearch style={iconStyles} />
        <FiMapPin style={iconStyles} />
        <FiUser style={iconStyles} />
        <FiHeart style={iconStyles} />
        <FiShoppingBag style={iconStyles} />
      </div>

      {/* Burger Menu Content */}
      {isOpen && (
        <div style={menuStyles}>
          <ul>
            <li>
              <Link href="/home">Kläder</Link>
            </li>
            <li>
              <Link href="/about">Nyheter</Link>
            </li>
            <li>
              <Link href="/services">Skor</Link>
            </li>
            <li>
              <Link href="/contact">Junior</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// Styling
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
