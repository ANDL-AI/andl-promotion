import React from 'react'

export default function HeroAndDemo() {
  return (
    <section id="hero" className="px-4 py-32 pb-16 text-center relative -z-10 overflow-hidden">
      <h2 className="text-sm font-semibold text-[#6321E6] mb-4">For higher education,</h2>
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        {/* Wrapping both words in a single container for a shared gradient */}
        <span className="combined-gradient-text">
          <span className="responsible">Responsible</span> <span className='and-text'>and </span>
          <span className="explainable">Explainable</span>
        </span> AI
      </h1>
      <p className="mb-8 max-w-2xl mx-auto text-lg">
        The new standard in AI for education.
      </p>
      <div className="flex justify-center gap-4 mb-0">
        <a
          href="mailto:team@andl.io"
          className="border border-[#00171f] text-white hover:bg-[#AF95E2] hover:text-black px-8 py-3 rounded-full font-semibold bg-black transition-all duration-300 text-lg"
        >
          Book a demo →
        </a>
      </div>
    </section>
  );
}
