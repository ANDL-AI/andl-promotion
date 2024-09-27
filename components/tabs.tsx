'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface TabContent {
  title: string
  content: string
}

const tabs: TabContent[] = [
  {
    title: "Mission",
    content: "Empower students and educational institutions to navigate AI in education responsibly and effectively."
  },
  {
    title: "Vision",
    content: "A world where AI can be used in education without doubt and complete confidence."
  },
  {
    title: "Fun Fact",
    content: "ANDL was initially conceived as a winning hackathon project at the Vrije Universiteit Amsterdam in our second year of university. Now, little over a year later, the idea evolved into a full-fledged startup with a full-time team of 4 co-founders."
  }
]

const wrapText = (text: string, maxLength: number) => {
  const words = text.split(' ')
  const lines: string[] = []
  let currentLine = ''

  words.forEach(word => {
    if ((currentLine + word).length > maxLength) {
      lines.push(currentLine.trim())
      currentLine = word + ' '
    } else {
      currentLine += word + ' '
    }
  })

  if (currentLine) {
    lines.push(currentLine.trim())
  }

  return lines.join('\n')
}

export default function ANDLInfoTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="inline-flex bg-gray-100 rounded-t-lg shadow-md">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === index
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="w-full max-w-2xl p-6 relative h-48 flex items-center justify-center bg-white shadow-md rounded-b-lg">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: activeTab === index ? 1 : 0,
              y: activeTab === index ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 flex items-center justify-center ${
              activeTab === index ? 'block' : 'hidden'
            }`}
          >
            <p className="px-4 text-lg text-gray-700 leading-relaxed text-center max-w-xl">
              {tab.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}