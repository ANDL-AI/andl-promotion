"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/andl_black_logo_only.svg";
import WhiteLogo from "@/public/andl_white_color_black_bg_logo_only.svg"; 

export default function FloatingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle dark mode by adding/removing Tailwind's "dark" class on document.documentElement
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-50 fixed top-3 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1 bg-white dark:bg-gray-900 bg-opacity-95 rounded-full shadow-md my-1">
          <Link href="/">
          <Image
              src={!isDarkMode ? Logo : WhiteLogo}
              alt="Logo"
              width={30}
              height={30}
              className="object-contain cursor-pointer ml-3 transition-all duration-300"
            />
          </Link>
          <div className="flex items-center space-x-3 mr-3">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                href="mailto:team@andl.io"
                className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-[#6321E6] dark:hover:text-[#636FF6] transition-all duration-300"
              >
                Contact Us
              </Link>
            </nav>
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Mobile Menu */}
            <div className="relative md:hidden" ref={menuRef}>
              <button
                onClick={toggleMenu}
                className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6321E6] flex items-center"
              >
                <Menu size={20} />
              </button>
              <nav
                className={`absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <a
                  href="mailto:team@andl.io"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
