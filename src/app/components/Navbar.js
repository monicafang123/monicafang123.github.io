"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import GooglyEye from "./GooglyEye";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path
      ? "border-b-2 border-white" 
      : "hover:text-white";
    };

  const mobileActive = (path) => {
    return pathname === path
      ? "bg-blue-50 text-blue-600"
      : "text-gray-600 hover:bg-gray-50";
  };

  return (
    <nav className="w-full mt-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">


          {/* Navigation */}
          <div className="flex-1 flex justify-center space-x-6 sm:space-x-8 font-mono sm:ml-5 text-xs sm:text-sm font-medium">
            <Link href="/"
              className={`inline-flex items-center px-1 pt-1 transition-colors duration-200 text-[rgb(255,225,65)] text-lg`}
            >
              Home
            </Link>
            
            <Link
              href="/pages/about"
              className={`inline-flex items-center px-1 pt-1 transition-colors duration-200 text-[rgb(255,225,65)] text-lg ${isActive("/pages/about")}`}
            >
              About Me
            </Link>

            <Link
              href="/Resume_New_Monica.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-1 pt-1 transition-colors duration-200 text-[rgb(255,225,65)] text-lg"
            >
              Resume
          </Link>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
