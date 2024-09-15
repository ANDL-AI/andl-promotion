import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-4 py-8 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-[#00171f] font-bold text-xl">ANDL</span>
        </div>
        <nav className="flex gap-4">
        <a
            href="https://github.com/ANDL-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-hs-third"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/company/andl-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-hs-third"
          >
            <FaLinkedin size={32} />
          </a>
        </nav>
      </div>
      <div className="text-center mt-8 text-gray-600">
        © Copyright {new Date().getFullYear()} ANDL. All rights reserved.
      </div>
    </footer>
  )
}