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
    title: "Fun Fact 💡",
    content: "ANDL was initially conceived as a winning hackathon project at the Vrije Universiteit Amsterdam in our second year of university. Now, little over a year later, the idea evolved into a full-fledged startup with a full-time team of 4 co-founders."
  }
]

export default function ANDLInfoTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-5/6 flex items-center justify-start">
      <div className="w-1/3 inline-flex flex-col items-start rounded-lg">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-2 text-lg font-medium transition-colors duration-200 ${
              activeTab === index
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="w-2/3 flex max-w-7xl rounded-lg">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: activeTab === index ? 1 : 0,
              y: activeTab === index ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
            className={`inset-0 flex items-center justify-center ${
              activeTab === index ? 'block' : 'hidden'
            }`}
          >
            <p className="px-4 text-md text-[#00171f] leading-relaxed text-start max-w-7xl">
              {tab.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}