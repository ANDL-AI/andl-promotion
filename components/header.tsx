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

    const handleWaitlist = () => {
        // Scroll to the waitlist element on the home page
        const waitlistElement = document.getElementById('waitlist');
        if (waitlistElement) {
            waitlistElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If the element is not found, you might want to handle this case
            console.error('Element with id "waitlist" not found');
        }
    };

    return (
        <header className="bg-hs-secondary text-hs-base px-2 py-4 md:p-4 flex justify-between items-center shadow-lg fixed top-0 w-full z-50">
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
                    className="transition ease-in-out duration-300 bg-hs-base text-hs-secondary px-4 py-2 rounded-lg hover:bg-hs-third hover:text-hs-text text-sm md:text-base"
                    onClick={handleWaitlist}
                >
                    Sign Up for the Waitlist
                </button>

                <button   
                    className="transition ease-in-out duration-300 hover:text-hs-third focus:outline-none text-sm md:text-base text-hs-base"
                    onClick={handleAboutUs}
                >
                    About Us
                </button>
            </nav>
        </header>
    );
};

export default HeaderNavBar;
