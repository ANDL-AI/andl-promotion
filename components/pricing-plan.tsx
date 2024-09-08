"use client";
import React from 'react';
import { Check } from 'lucide-react';

const PricingPlan = () => {
  const handleWaitlist = () => {
    const waitlistElement = document.getElementById('waitlist');
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element with id "waitlist" not found');
    }
  };

  const pricingPlans = [
    {
      title: "ANDL Basic Plan",
      price: "1000$",
      description:
        "Includes limited concurrent request handling as well as AI-response elements (bias, confidence, rationale, etc.).",
      features: [
        "Support up to 25 concurrent requests",
        "Basic analytics",
        "Access to standard models",
        "Response elements like bias and rationale",
        "Custom domains",
      ],
      fineTuning: "No further custom fine-tuning in this plan. It still includes various fine-tuned models for different courses.",
    },
    {
      title: "ANDL Plus Plan",
      price: "2000$",
      description:
        "Includes school-level fine-tuning for up to 5 courses and better concurrent request handling. This also grants access to the platform.",
      features: [
        "Support up to 50 concurrent requests",
        "Advanced analytics",
        "Fine-tuning with up to 5GB of data per course",
        "Response elements like bias and rationale",
        "Custom domains and platform access",
      ],
      fineTuning: "Fine-tuning covers a maximum of 5GB of data per course (e.g., lecture notes, assignments, etc.) for up to 5 courses.",
      recommended: true, // Mark this plan as recommended
    },
    {
      title: "ANDL Pro Plan",
      price: "5000$",
      description:
        "Includes major-level fine-tuned LLMs with additional benefits such as AI-response elements (bias, confidence, rationale, etc.), and unlimited request handling.",
      features: [
        "Support up to 100 concurrent requests",
        "Full advanced analytics and reporting",
        "Fine-tuning with up to 10GB of data per course",
        "Response elements like bias and rationale",
        "Custom domains and platform access",
      ],
      fineTuning: "Fine-tuning includes up to 10GB of data per course for up to 10 courses.",
    },
  ];

  return (
    <div id="pricing" className="w-full bg-gray-900 flex flex-col xl:flex-row xl:justify-center items-center py-16 space-y-8 xl:space-y-0 xl:space-x-8">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="hover:bg-gray-700 transition duration-300 w-full max-w-md bg-gray-800 text-gray-100 rounded-xl shadow-2xl flex flex-col h-full relative">
          {/* Conditional Badge for Recommended Plan */}
          {plan.recommended && (
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
              Recommended
            </div>
          )}
          <div className="bg-indigo-600 p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">{plan.title}</h2>
            <p className="text-5xl font-bold mb-2">{plan.price}<span className="text-xl">/yr</span></p>
          </div>
          
          <div className="p-8 flex-grow space-y-6">
            <p className="text-gray-300 min-w-[400px]">{plan.description}</p>
            <p className="text-gray-400 italic min-w-[300px]">{plan.fineTuning}</p>
            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center min-w-[400px]">
                  <Check className="text-indigo-400 mr-3" size={20} />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Add mt-auto to push button to the bottom */}
          <div className="p-8 mt-auto">
            <button onClick={handleWaitlist} className="w-full bg-indigo-500 text-white font-semibold py-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300 text-lg">
              Contact Us
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlan;
