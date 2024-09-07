import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface Person {
  input: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const people: Person[] = [
  {
    input: 'Goated FR',
    name: 'Atilla Colak',
    role: 'Co-founder and developer',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQHc4JQQ50ptow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609161991588?e=1730937600&v=beta&t=GbWS4m6HOQBAmh9x85iRTwEv0fr8b4gz8QhJWchcE-w',
    linkedin: 'https://www.linkedin.com/in/atilla-colak/',
  },
  {
    input: "Goated FR",
    name: "Sagar Chethan Kumar",
    role: "Co-founder and AI or Whatever", 
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFVA2vH-cDXpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704072652393?e=1730937600&v=beta&t=XXFNEoqQbBMU-XhkETj4cdttdDci55dICz_OmnKENO0",
    linkedin: "https://www.linkedin.com/in/sagar-chethan-kumar/"
  },
  {
    input: "Goated FR", 
    name: "Neel Lodha", 
    role: "Co-founder and developer", 
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEh6KfMJpXjRA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714233672794?e=1730937600&v=beta&t=O4ama9vmfxPyQuIPmTB5V5ttXjeyhiRD_F1krpZpnWg", 
    linkedin: "https://www.linkedin.com/in/neel-lodha/"
  }, 
  { 
    input: "Goated FR", 
    name: "Manu Gautam", 
    role: "Co-founder and AI or Whatever", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQEa6AKMMUNS-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695722114136?e=1730937600&v=beta&t=euQY6979D1ax2j6Yf7_rUf3AYKd777UIpp2r0eZ2xTY", 
    linkedin: "https://www.linkedin.com/in/manu-gautam-6b5064259/"
  }
  // Add other people here
];

const AboutUs: React.FC = () => {
  return (
    <div className="bg-hs-background text-hs-text p-4 pt-32 h-full w-full">
      <h1 className="text-4xl font-bold mb-8 text-center">
        About Us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-hs-base p-6 rounded-lg shadow-lg transition-all duration-700 hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <Image
                src={person.image}
                alt={person.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-semibold text-hs-secondary">{person.name}</h2>
                <p className="text-lg text-gray-400">{person.role}</p>
              </div>
            </div>
            <p className="text-lg mb-4 text-black">{person.input}</p>
            <div className="flex space-x-4">
              {person.linkedin && (
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077B5" }}

            >
              <FaLinkedin size={32} />
            </a>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
