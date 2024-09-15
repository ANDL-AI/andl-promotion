import React from 'react'
import Image from 'next/image'
import { Linkedin, Github, Globe } from 'lucide-react'

interface Person {
  input: string
  name: string
  role: string
  image: string
  linkedin?: string
  github?: string
  personalSite?: string
}

const people: Person[] = [
  {
    input: `CS @ TU Delft. 
Previously worked in data science for 3 years.`,
    name: 'Atilla Colak',
    role: 'Co-founder and Developer',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQHc4JQQ50ptow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609161991588?e=1730937600&v=beta&t=GbWS4m6HOQBAmh9x85iRTwEv0fr8b4gz8QhJWchcE-w',
    linkedin: 'https://www.linkedin.com/in/atilla-colak/',
    github: "https://github.com/AtillaColak",
    personalSite: "https://atillas.co/"
  },
  {
    input: `Ex-PwC Software Developer. HCI & AI Researcher.`,
    name: "Sagar Chethan Kumar",
    role: "Co-founder and AI Developer", 
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFVA2vH-cDXpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704072652393?e=1730937600&v=beta&t=XXFNEoqQbBMU-XhkETj4cdttdDci55dICz_OmnKENO0",
    linkedin: "https://www.linkedin.com/in/sagar-chethan-kumar/",
    github: "https://github.com/Sagar-CK"
  },
  {
    input: "Full-Stack dev & CS @ TU Delft.", 
    name: "Neel Lodha", 
    role: "Co-founder and Developer", 
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEh6KfMJpXjRA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714233672794?e=1730937600&v=beta&t=O4ama9vmfxPyQuIPmTB5V5ttXjeyhiRD_F1krpZpnWg", 
    linkedin: "https://www.linkedin.com/in/neel-lodha/",
    github: "https://github.com/Idkwhoami42"
  }, 
  { 
    input: "Honors CS @ TU Delft.", 
    name: "Manu Gautam", 
    role: "Co-founder and AI Developer", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQEa6AKMMUNS-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695722114136?e=1730937600&v=beta&t=euQY6979D1ax2j6Yf7_rUf3AYKd777UIpp2r0eZ2xTY", 
    linkedin: "https://www.linkedin.com/in/manu-gautam-6b5064259/",
    github: "https://github.com/manugautam04"
  }
]

export default function AboutUs() {
  return (
    <section id="about" className="flex flex-col items-center justify-center w-full h-full px-4 bg-gradient-to-br from-white to-[#AF95E2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-lg text-gray-700 mb-12 text-center mt-32 my-4 lg:my-8">
          <h3 className="text-2xl font-bold text-[#6321E6] mb-4">Fun Fact 💡</h3>
          <p className="max-w-3xl mx-auto">
            ANDL was initially conceived as a winning hackathon project at the <a href="https://vu.nl/en" className="text-[#6321E6] hover:underline transition duration-300">Vrije Universiteit Amsterdam</a> in our second year of university.
            Now, little over a year later, the idea evolved into a full-fledged startup with a full-time team of 4 co-founders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 pb-12 md:pt-12 md:pb-24">
          {people.map((person, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
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
                  <h3 className="text-2xl font-semibold text-[#00171f]">{person.name}</h3>
                  <p className="text-lg text-gray-600">{person.role}</p>
                </div>
              </div>
              <p className="text-lg mb-4 text-gray-700">{person.input}</p>
              <div className="flex space-x-4">
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6321E6] hover:text-[#4A1AAB] transition duration-300"
                  >
                    <Linkedin size={24} />
                  </a>      
                )}
                {person.github && (
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6321E6] hover:text-[#4A1AAB] transition duration-300"
                  >
                    <Github size={24} />
                  </a>      
                )}
                {person.personalSite && (
                  <a
                    href={person.personalSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6321E6] hover:text-[#4A1AAB] transition duration-300"
                  >
                    <Globe size={24} />
                  </a>      
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
