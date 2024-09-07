import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faLetterboxd } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

const AboutUs = (input: string, name: string, role: string, image: string) => {
  const [text, Settext] = useState(""); 
  const words = text.split(' ');

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-4 shadow-xl shadow-slate-800">
      <h1 className="text-4xl font-bold mb-4 transition-all duration-700 hover:text-sky-500">
        About Me
      </h1>
      <Image src="/marshadow.gif" alt="Marshadow" width={256} height={256} className="mb-4" />
      <p className="text-lg max-w-md text-center">
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block transition-all duration-500 hover:text-cyan-900 mx-1"
          >
            {word}
          </span>
        ))}
        <br />
        <a
          href="https://lichess.org/@/atillasc"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-all duration-700 hover:text-red-500"
        >
          Challenge me on Lichess!
        </a>
      </p>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://open.spotify.com/user/gs123321?si=7de625a9f3194bf1"
          target="_blank"
          rel="noopener noreferrer"
          className=" transition-all duration-700 hover:text-green-500"
        >
          <FontAwesomeIcon icon={faSpotify} size="2x" />
        </a>
        <a
          href="https://letterboxd.com/Att1laTheHun/"
          target="_blank"
          rel="noopener noreferrer"
          className=" transition-all duration-700 hover:text-yellow-500"
        >
          <FontAwesomeIcon icon={faLetterboxd} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
