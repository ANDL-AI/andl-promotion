import React from 'react';

interface ParagraphProps {
  text: string;
  title: string;
  side: 'left' | 'right';
}

const Paragraph: React.FC<ParagraphProps> = ({ text, title, side }) => {
  return (
    <div className={`w-full bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300`}>
      <h2 className="text-2xl font-semibold mb-4 text-indigo-400">{title}</h2>
      <p className="text-gray-300 leading-relaxed">{text}</p>
    </div>
  );
};

export default Paragraph;