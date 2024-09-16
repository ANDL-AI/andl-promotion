'use client'

import React, { useState, useEffect } from 'react'

const messages = [
  "The new standard in AI for education.",
  "Empowering conscious learning with AI clarity modules.",
  "Platform to learn with others and ANDL.", 
  "Track progress, unlock potential, thrive.", 
  "Revolutionizing learning experiences.",
  "We are ANDL: Your partner in the future of learning.",
  "The future of education!"
]

const gradients = [
  "from-[#B01E68] to-[#8E3200]",
  "from-[#c9184a] to-[#6D67E4]",
  "from-[#F77E21] to-[#FF5D5D]",
  "from-[#36BA98] to-[#0C1844]",
  "from-[#624E88] to-[#C7253E]",
  "from-[#e30613] to-[#3F37C9]",
  "from-[#560BAD] to-[#4361EE]"
]

export default function HeroAndDemo() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(25)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleTyping = () => {
      const i = loopNum % messages.length
      const fullText = messages[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 25 : 50)

      if (!isDeleting && text === fullText) {
        const waitTime = i === 6 ? 4000 : 2000
        setTimeout(() => setIsDeleting(true), waitTime)
      } 
      else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <section id="hero" className="px-4 py-32 pb-16 text-center relative -z-10 overflow-hidden">
      <h2 className="text-sm font-semibold text-[#6321E6] mb-4">For higher education,</h2>
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        <span>
          <span className="responsible">Responsible</span> 
          <span className="and-text"> and </span>
          <span className="explainable">Explainable </span>
          <span className='and-text'>AI</span>
        </span>
      </h1>
      <p className="mb-8 h-8 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-600">
        <span className={`bg-gradient-to-r ${gradients[loopNum % gradients.length]} bg-clip-text text-transparent transition-all duration-500 font-semibold`}>
          {text}
        </span>
        <span className="animate-blink">|</span>
      </p>      
      <div className="flex justify-center gap-4 mb-0">
        <a
          href="mailto:team@andl.io"
          className="border border-[#00171f] text-white hover:bg-[#6321E6] px-8 py-3 rounded-full font-semibold bg-black transition-all duration-300 text-lg"
        >
          Book a demo →
        </a>
      </div>
    </section>
  )
}