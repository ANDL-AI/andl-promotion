"use client"; 
import React, { useState } from 'react';

interface FaqDropdownCardProps {
  question: string;
  answer: string;
}

const FaqDropdownCard: React.FC<FaqDropdownCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-2xl mb-4">
      <button
        className="w-full text-center text-2xl font-semibold text-indigo-400 mb-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          className={`pl-2 w-8 h-8 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <p className="text-gray-400 text-lg">{answer}</p>
      )}
    </div>
  );
};

export default FaqDropdownCard;
