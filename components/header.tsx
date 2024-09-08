"use client";
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image'; // Make sure to import Image
import Logo from "@/public/andl_white_color_black_bg.svg";

const HeaderNavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname(); // Get current path

    const handleHome = () => {
      router.push("/");
    };

    const handleAboutUs = () => {
        router.push("/about");
    };

    const handlePricing = () => {
        if(pathname === "/"){
            const waitlistElement = document.getElementById('pricing');
            if (waitlistElement) {
                waitlistElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Element with id "pricing" not found');
            }
        }
        else{ 
            router.push("/#pricing");
        }
    };

    const handleWaitlist = () => {
        if(pathname === "/"){
            const waitlistElement = document.getElementById('waitlist');
            if (waitlistElement) {
                waitlistElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Element with id "waitlist" not found');
            }
        }
        else{ 
            router.push("/#waitlist")
        }
    };

    const handleContact = () => {
        if(pathname === "/"){
            const waitlistElement = document.getElementById('contact');
            if (waitlistElement) {
                waitlistElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Element with id "waitlist" not found');
            }
        }
        else{ 
            router.push("/#contact")
        }
    };

    return (
        <header className="bg-gray-950 text-hs-base px-2 py-4 md:p-4 flex justify-between items-center shadow-lg fixed top-0 w-full z-50 border-b border-gray-700">
            <div className="flex items-center space-x-4 flex-grow">
                <button
                    className="transition ease-in-out duration-300 hover:text-hs-third background-hs-base text-md md:text-2xl ml-0 md:ml-4"
                    onClick={handleHome}
                >
                    <Image src={Logo} alt="Logo" width={150} height={150} className="object-contain" />
                </button>
            </div>
            <nav className="flex items-center space-x-4 ml-auto">
                <button
                    className="transition ease-in-out duration-300 hover:text-hs-third focus:outline-none text-sm md:text-base text-hs-base"
                    onClick={handleWaitlist}
                >
                    Join Waitlist
                </button>

                <button   
                    className="transition ease-in-out duration-300 hover:text-hs-third focus:outline-none text-sm md:text-base text-hs-base"
                    onClick={handlePricing}
                >
                    Pricing
                </button>

                <button   
                    className="transition ease-in-out duration-300 hover:text-hs-third focus:outline-none text-sm md:text-base text-hs-base"
                    onClick={handleContact}
                >
                    Contact
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
