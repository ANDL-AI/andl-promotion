import React from 'react'

export default function HeroAndDemo() {
  return (
    <section id="hero" className="px-4 py-32 text-center bg-gradient-to-br from-white to-[#AF95E2]">
      <h2 className="text-sm font-semibold text-[#6321E6] mb-4">For higher education,</h2>
      <h1 className="text-4xl font-bold mb-4">
        <span className="text-[#AF95E2]">Responsible</span> and 
        <br />
        <span className="text-[#6321E6]">Explainable</span> AI
      </h1>
      <p className="mb-8 max-w-2xl mx-auto">
        The new standard in AI for education.
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <a href="mailto:team@andl.io" className="border border-[#00171f] text-[#00171f] px-6 py-2 rounded-full font-semibold hover:bg-hs-third">
          Book a demo →
        </a>
      </div>
    </section>
  )
}
