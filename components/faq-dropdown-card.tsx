import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "How does ANDL enhance my learning experience?",
      answer: "ANDL provides a personalised learning experience for everyone. Our platform allows you to create your own leaning dashboard using all your course materials and then interact with your very own AI tutor. This allows you to get help specific to your content and learn more effectively."
    },
    {
      question: "What makes ANDL different from other e-learning platforms?",
      answer: "Unlike existing AI tutors, ANDL incorporates ground truth data from students and professors to provide more accurate and relevant responses. This collaborative approach ensures that the AI is constantly learning and improving and differentiating ourselves from traditional AI tutoring platforms that often neglect human oversight."
    },
    {
      question: "How does ANDL's AI community forum work?",
      answer: "ANDL's AI community forum allows students, TAs, and professors to interact and collaborate. Students can ask public questions, receive AI-generated responses, and get feedback from the community. This collaborative approach helps validate and enhance the AI's responses, providing a richer learning experience."
    },
    {
      question: "Who can use ANDL?",
      answer: "Both individual users and educational institutions can use ANDL. Our Individual Learner Plan gives students access to all of ANDL's features, while our Institutional Plan provides educational institutions with a customised platform to meet their needs including potential local hosting and data storage."
    }
  ]

  return (
    <section
      id="faq"
      className="px-4 py-16 bg-[#f9f9f9] dark:bg-[#1F2937] text-[#00171f] dark:text-[#F9FAFB] relative -z-10"
    >
      <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold dark:text-[#F9FAFB]">
                {faq.question}
              </h3>
              <button className="text-[#977cce] dark:text-[#977cce] transition-transform duration-500 transform">
                {openFAQ === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
            <div
              className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                openFAQ === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 dark:text-[#e1e1e1] pb-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
