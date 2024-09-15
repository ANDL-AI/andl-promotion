import React from 'react';

export default function Pricing() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="px-4 py-16 bg-[#00171f] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard
          title="Academic Plan"
          price="$..."
          period="/month/user"
          features={[
            "Access to course-specific AI models",
            "Real-time analytics and insights",
            "Community platform access",
            "Support for integrating into university systems"
          ]}
          buttonText="Contact Us"
          onButtonClick={() => scrollToSection('#hero')}
        />
        <PricingCard
          title="Individual Learner Plan"
          price="$..."
          period="/month"
          features={[
            "Course-specific AI responses",
            "Bias, confidence, and rationale explanations",
            "Access to collaborative learning platform",
            "Community-driven support"
          ]}
          buttonText="Join Waitlist"
          onButtonClick={() => scrollToSection('#waitlist')}
        />
      </div>
    </section>
  );
}

function PricingCard({ title, price, period, features, buttonText, onButtonClick }) {
  return (
    <div className="bg-white text-[#00171f] p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-3xl font-bold mb-4">
          {price} {period && <span className="text-sm font-normal">{period}</span>}
        </p>
        <ul className="mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button 
          onClick={onButtonClick} 
          className="w-full bg-[#00171f] text-white py-2 rounded-full font-semibold transition-all duration-300 hover:bg-[#6321E6]">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
