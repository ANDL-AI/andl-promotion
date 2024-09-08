import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-hs-background text-hs-base py-4 w-full">
      <div className="container mx-auto flex justify-center items-center p-4">
        <div className="text-sm mr-16 text-hs-base">
          All rights reserved, &copy; 2024 Andl. 
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ANDL-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hs-base hover:text-hs-third"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/company/andl-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hs-base hover:text-hs-third"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
