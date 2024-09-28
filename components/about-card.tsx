'use client'

import React from 'react'
import Image from 'next/image'
import { Linkedin, Github, Globe, Target, Eye, Lightbulb } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion'

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
    input: `Ex-PwC Software Developer. HCI & AI Researcher.`,
    name: "Sagar Chethan Kumar",
    role: "Co-founder and AI Developer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFVA2vH-cDXpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704072652393?e=1730937600&v=beta&t=XXFNEoqQbBMU-XhkETj4cdttdDci55dICz_OmnKENO0",
    linkedin: "https://www.linkedin.com/in/sagar-chethan-kumar/",
    github: "https://github.com/Sagar-CK",
    personalSite: "https://sagarspace.com/"
  },
  {
    input: `CS @ TU Delft. Previously worked in data science for 3 years.`,
    name: 'Atilla Colak',
    role: 'Co-founder and Developer',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQHc4JQQ50ptow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609161991588?e=1730937600&v=beta&t=GbWS4m6HOQBAmh9x85iRTwEv0fr8b4gz8QhJWchcE-w',
    linkedin: 'https://www.linkedin.com/in/atilla-colak/',
    github: "https://github.com/AtillaColak",
    personalSite: "https://atillas.co/"
  },
  {
    input: "Honors CS @ TU Delft.",
    name: "Manu Gautam",
    role: "Co-founder and AI Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEa6AKMMUNS-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695722114136?e=1730937600&v=beta&t=euQY6979D1ax2j6Yf7_rUf3AYKd777UIpp2r0eZ2xTY",
    linkedin: "https://www.linkedin.com/in/manu-gautam-6b5064259/",
    github: "https://github.com/manugautam04"
  },
  {
    input: "Full-Stack Developer & CS @ TU Delft.",
    name: "Neel Lodha",
    role: "Co-founder and Developer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEh6KfMJpXjRA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714233672794?e=1730937600&v=beta&t=O4ama9vmfxPyQuIPmTB5V5ttXjeyhiRD_F1krpZpnWg",
    linkedin: "https://www.linkedin.com/in/neel-lodha/",
    github: "https://github.com/Idkwhoami42"
  }
]

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
}

export default function AboutUs() {
  return (
    <section id="about" className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-gradient-to-br from-white to-[#c3b3e2]">
      <div className="mt-24 max-w-7xl w-full mx-auto cursor-no-pointer flex flex-col items-center justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#00171f] mb-8"
        >
          About Us
        </motion.h1>
        
        <Tabs defaultValue="mission" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="vision">Our Vision</TabsTrigger>
            <TabsTrigger value="funfact">Fun Fact</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <TabsContent value="mission">
              <motion.div
                key="mission"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card>
                  <CardContent className="flex items-center space-x-4 pt-6">
                    <Target className="h-10 w-10 text-[#6321E6]" />
                    <p>Our mission is to empower students and educational institutions to navigate AI in education responsibly and effectively.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="vision">
              <motion.div
                key="vision"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card>
                  <CardContent className="flex items-center space-x-4 pt-6">
                    <Eye className="h-10 w-10 text-[#6321E6]" />
                    <p>We envision a world where AI can be used in education without doubt and with complete confidence.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="funfact">
              <motion.div
                key="funfact"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card>
                  <CardContent className="flex items-center space-x-4 pt-6">
                    <Lightbulb className="h-10 w-10 text-[#6321E6]" />
                    <p>ANDL started as a winning hackathon project at Vrije Universiteit Amsterdam. Just over a year later, we grew into a full-time team of four co-founders.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-semibold text-[#00171f] mb-8"
        >
          Meet Our Team
        </motion.h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 pb-12 md:pt-12 md:pb-24">
          {people.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-[#00171f]">{person.name}</h3>
                      <p className="text-md text-gray-600">{person.role}</p>
                    </div>
                  </div>
                  <p className="text-md mb-4 text-gray-700">{person.input}</p>
                  <div className="flex space-x-4">
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6321E6] hover:text-[#4A1AAB] transition duration-300"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {person.github && (
                      <a
                        href={person.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6321E6] hover:text-[#4A1AAB] transition duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {person.personalSite && (
                      <a
                        href={person.personalSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6321E6] hover:text-[#4A1AAB] transition duration-300"
                      >
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}