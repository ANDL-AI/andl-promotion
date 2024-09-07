import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-4 w-full">
      <div className="container mx-auto flex justify-center items-center p-4">
        <div className="text-sm mr-16 text-hs-secondary">
          All rights reserved, &copy; 2024 Andl. 
        </div>
        <div className="flex space-x-4 ">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;