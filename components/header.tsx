"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HeaderNavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    const handleHome = () => {
      router.push("/");
    };

    const handleAboutUs = () => {
        router.push("/about");
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleYouTube = () => {
        window.open('https://www.youtube.com/watch?v=gPpG0kStC4o', '_blank');
    };

    return (
        <header className="bg-black text-white px-2  py-4 md:p-4 flex justify-between items-center shadow-lg fixed top-0 w-full z-50">
            <div className="flex items-center space-x-4 flex-grow">
                <button
                    className="transition ease-in-out duration-300 hover:text-hs-third text-hs-base text-md md:text-2xl ml-0 md:ml-4"
                    onClick={handleHome}
                >
                    Andl
                </button>
            </div>
            <nav className="flex items-center space-x-4 ml-auto">
                <button
                    className="transition ease-in-out duration-300 bg-hs-base text-black px-4 py-2 rounded-lg hover:bg-hs-secondary hover:text-hs-third text-sm md:text-base"
                    onClick={handleYouTube}
                >
                    Video of the Week
                </button>

                <button   
                    className="transition ease-in-out duration-300 hover:text-hs-secondary focus:outline-none text-sm md:text-base text-hs-base"
                    onClick={handleAboutUs}
                >
                    About Us
                </button>
            </nav>
        </header>
    );
};

export default HeaderNavBar;
