import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface Person {
  input: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

const people: Person[] = [
  {
    input: `Computer Science and Engineering senior @ TU Delft. 
Previously worked in data science for 3 years.`,
    name: 'Atilla Colak',
    role: 'Co-founder and developer',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQHc4JQQ50ptow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609161991588?e=1730937600&v=beta&t=GbWS4m6HOQBAmh9x85iRTwEv0fr8b4gz8QhJWchcE-w',
    linkedin: 'https://www.linkedin.com/in/atilla-colak/',
    github: "https://github.com/AtillaColak"
  },
  {
    input: `Worked as a Software Developer at PwC.
Research Interests: NLP, Human-Computer Interaction, Data Mining, and ML.`,
    name: "Sagar Chethan Kumar",
    role: "Co-founder and AI developer", 
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFVA2vH-cDXpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704072652393?e=1730937600&v=beta&t=XXFNEoqQbBMU-XhkETj4cdttdDci55dICz_OmnKENO0",
    linkedin: "https://www.linkedin.com/in/sagar-chethan-kumar/",
    github: "https://github.com/Sagar-CK"
  },
  {
    input: "Ex Software Developer at Tesla.", 
    name: "Neel Lodha", 
    role: "Co-founder and developer", 
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEh6KfMJpXjRA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714233672794?e=1730937600&v=beta&t=O4ama9vmfxPyQuIPmTB5V5ttXjeyhiRD_F1krpZpnWg", 
    linkedin: "https://www.linkedin.com/in/neel-lodha/",
    github: "https://github.com/Idkwhoami42"
  }, 
  { 
    input: "Computer Science and honors student @ TU Delft.", 
    name: "Manu Gautam", 
    role: "Co-founder and AI developer", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQEa6AKMMUNS-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695722114136?e=1730937600&v=beta&t=euQY6979D1ax2j6Yf7_rUf3AYKd777UIpp2r0eZ2xTY", 
    linkedin: "https://www.linkedin.com/in/manu-gautam-6b5064259/",
    github: "https://github.com/manugautam04"
  }
  // Add other people here
];

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-900 text-hs-base p-6 md:p-12 lg:p-32 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 mt-16 lg:mt-0 text-center text-indigo-400">
        About Us
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl mb-8 lg:mb-0"
          >
            <div className="flex items-center mb-6">
              <Image
                src={person.image}
                alt={person.name}
                width={120}
                height={120}
                className="rounded-full"
              />
              <div className="ml-6">
                <h2 className="text-2xl font-semibold text-hs-third">{person.name}</h2>
                <p className="text-lg text-gray-400">{person.role}</p>
              </div>
            </div>
            <p className="text-lg mb-4 text-gray-200">{person.input}</p>
            <div className="flex space-x-4">
              {person.linkedin && (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hs-third hover:text-hs-fourth transition duration-300"
                >
                  <FaLinkedin size={28} />
                </a>      
              )}
              {person.github && (
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hs-third hover:text-hs-fourth transition duration-300"
                >
                  <FaGithub size={28} />
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
