//"use client",
//import React, { useState } from "react";

export default function productpage() {
  //const productpage = () => {};

  return (
    <main className="flex min-h-screen flex-col pl-4 pr-4">
      <nav className="bg-blue-500">
        <h1>logo </h1>
      </nav>
      <div>
        <h1>product page</h1>
        <header>
          <h1>Product Bild</h1>
        </header>
        <div>
          <h1>product info</h1>
          <div>
            <p>product name</p>
          </div>
          <div>
            <p>product price</p>
          </div>
          <div>
            <p>add to basket</p>
          </div>
          <div>
            <p>product usp</p>
          </div>
          <div>
            <p>product description accordion</p>
          </div>
        </div>
      </div>
      <footer>
        <p>Footer</p>
      </footer>
    </main>
  );
}
