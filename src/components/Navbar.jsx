import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-pink-600">MyPortfolio</h1>
      <ul className="flex gap-6 text-gray-700">
        <li className="hover:text-pink-500 transition">Home</li>
        <li className="hover:text-green-500 transition">About</li>
        <li className="hover:text-orange-500 transition">Projects</li>
        <li className="hover:text-yellow-500 transition">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
