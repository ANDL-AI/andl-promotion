"use client";
import React, { useEffect, useRef } from 'react';

const schools = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1024px-MIT_logo.svg.png",
  "https://www.logo.wine/a/logo/Yale_University/Yale_University-Logo.wine.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Seal_of_the_University_of_California%2C_San_Diego.svg/640px-Seal_of_the_University_of_California%2C_San_Diego.svg.png",
  "https://seeklogo.com/images/C/carnegie-mellon-university-logo-22C9763CEA-seeklogo.com.png",
  "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/1212px-Duke_Blue_Devils_logo.svg.png", 
  "https://seeklogo.com/images/H/harvard-university-logo-D7CC65EE30-seeklogo.com.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Zegel_Technische_Universiteit_Delft.svg/1200px-Zegel_Technische_Universiteit_Delft.svg.png",
  "https://weadapt.org/wp-content/uploads/2023/05/northeasternuniversity_logoseal.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/2560px-Michigan_Wolverines_logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraqzMiljaN5I3uV7EVb_toujilUhHHqBYVw&s"
];

export default function TargetCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = 50; // seconds
  
      const keyframes = `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${scrollWidth}px); }
        }
      `;
  
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);
  
      scrollContainer.style.animation = `scroll ${animationDuration}s linear infinite`;
    }
  }, []);  

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100'>
        <h1 className='text-2xl py-6 text-hs-third'>Our Potential Reach</h1>
    <div className="w-full overflow-hidden bg-gray-100 py-2 sticky bottom-0">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
        <div ref={scrollRef} className="flex">
          {[...schools, ...schools].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-24 h-24 mx-4">
              <img
                src={logo}
                alt={`School logo ${index}`}
                className="w-full h-full object-contain p-1 filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

// TODO: fix carousel, implemtn about us page, write the paragprahs, and later customize the colors. 