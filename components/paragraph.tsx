import React from 'react';

interface ParagraphProps {
  text: string;
  title: string;
  side: 'left' | 'right';
}

const Paragraph: React.FC<ParagraphProps> = ({ text, title, side }) => {
  const sideClasses = side === 'left' ? 'self-start' : 'justify-end';
  const textAlignment = side === 'left' ? 'text-left' : 'text-left';
  const hoverEffect = 'hover:bg-hs-fourth transition ease-in-out duration-300';

  return (
    <div className={`flex ${sideClasses} w-full px-6 py-12`}>
      <div className={`bg-hs-base shadow-lg rounded-lg p-6 ${hoverEffect} ${textAlignment}`}>
        <h2 className="text-2xl font-semibold mb-4 text-hs-secondary">{title}</h2>
        <p className="text-hs-text leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default Paragraph;
