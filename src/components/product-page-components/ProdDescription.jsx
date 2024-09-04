import React, { useState } from "react";

export default function ProdDescription() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        onClick={toggleAccordion}
        className=" p-4 bg-blue-500 text-white text-left rounded hover:bg-blue-700 focus:outline-none"
      >
        {isOpen ? "Hide Product Description" : "Show Product Description"}
      </button>
      {isOpen && (
        <div className="p-4 border border-t-0 border-blue-500 rounded-b bg-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      )}
    </div>
  );
}
