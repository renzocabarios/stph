import React from "react";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-center bg-transparent sticky top-0 right-0">
      <div className="w-full max-w-[1040px] flex flex-col gap-4 items-center p-8 md:flex-row md:justify-between ">
        <div className="relative min-w-[240px] min-h-[40px] flex items-center justify-center">
          <Image src="/stph.png" alt="Logo" fill className="object-cover" />
        </div>

        <div className="w-full md:w-fit flex items-center justify-evenly gap-4">
          <p className="hover:text-yellow-300 cursor-pointer">Blog</p>
          <p className="hover:text-yellow-300 cursor-pointer">Events</p>
          <p className="hover:text-yellow-300 cursor-pointer">Hire</p>
          <p className="hover:text-yellow-300 cursor-pointer">About</p>
        </div>
      </div>
    </div>
  );
}
