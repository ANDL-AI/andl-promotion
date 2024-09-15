import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index: any) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "How does ANDL enhance the learning experience for students?",
      answer: "ANDL offers course-specific AI models that provide tailored responses, including explanations of bias, confidence levels, and rationale. This allows students to gain deeper insights and evaluate the reliability of AI-generated answers. Our collaborative platform also supports peer-to-peer interaction, enabling students to ask questions and receive feedback from their peers, TAs, and professors."
    },
    {
      question: "What benefits does ANDL offer to universities and educators?",
      answer: "ANDL provides universities with fine-tuned models for specific courses, which help track student progress and identify areas where students struggle. Our analytics tools offer real-time insights into student engagement and question patterns. Additionally, our platform supports integration into university systems and fosters a sense of community through collaborative learning."
    },
    {
      question: "Can individual learners use ANDL's tools and features?",
      answer: "Yes, individual learners can access ANDL's AI-driven learning tools and collaborative platform. Our Individual Learner Plan provides access to course-specific AI responses, along with explanations of bias and confidence. Learners can also join our community to engage with other students and gain additional support."
    },
    {
      question: "How does ANDL's community platform work?",
      answer: "ANDL's community platform allows students, TAs, and professors to interact and collaborate. Students can ask public questions, receive AI-generated responses, and get feedback from the community. This collaborative approach helps validate and enhance the AI's responses, providing a richer learning experience."
    }
  ]

  return (
    <section id="faq" className="px-4 py-16 bg-[#f9f9f9] text-[#00171f]">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-8 border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <button className="text-[#6321E6] transition-transform duration-300 transform">
                {openFAQ === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
            <div
              className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                openFAQ === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
