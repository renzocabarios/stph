import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center sticky top-0 bg-transparent p-8 border-b border-gray-700 bg-red-600">
      <div className="flex items-center justify-between max-w-[1440px] w-full">
        <div className="logo">
          <img src="/stph.png" alt="Logo" className="h-11" />
        </div>
        <Menu size={30} className="text-white md:hidden" />
        <div className="md:flex items-center gap-4 text-white text-2xl hidden">
          <p className="hover:text-yellow-300 cursor-pointer">Blog</p>
          <p className="hover:text-yellow-300 cursor-pointer">Events</p>
          <p className="hover:text-yellow-300 cursor-pointer">Hire</p>
          <p className="hover:text-yellow-300 cursor-pointer">About</p>
        </div>
      </div>
    </div>
  );
}
