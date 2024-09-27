"use client";
import React, { useState, useEffect, useRef } from 'react'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/public/andl_black_color_white_bg.svg"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed w-full transition-all duration-300 ${scrollPosition > 50 ? 'bg-white bg-opacity-90' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={150} height={150} className="object-contain cursor-pointer" />
          </Link>
          <div className="flex items-center space-x-4">
            <a
              href="/about"
              className="text-black font-medium cursor-pointer transition-all duration-300 hover:text-[#6321E6] hover:scale-105"
            >
              About Us
            </a>
            <div className="relative" ref={menuRef}>
              <button
                onClick={toggleMenu}
                className="bg-[#000000] shadow-md text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6321E6] flex items-center"
              >
                <Menu size={24} className="mx-2" />
              </button>
              <nav
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2 pointer-events-none'
                }`}
              >
                <a href="/#hero" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Home</a>
                <a href="/#features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Features</a>
                <a href="/#pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Pricing</a>
                <a href="/#faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">FAQ</a>
                <a href="/#waitlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Join Waitlist</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
