import React from 'react';
import { HandHelping, ChartNetwork } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="px-4 py-16 bg-white bg-opacity-80">
      <h2 className="text-2xl font-bold text-center mb-12">
        Empowering Education with ANDL's Responsible and Explainable AI Solutions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <FeatureCard
          icon={<HandHelping className="w-6 h-6 text-white" />}
          title="Comprehensive Response Assistance"
          description="ANDL provides detailed clarity metrics like rationale, counterfactuals, bias, and confidence alongside each response, ensuring a deeper understanding of the AI’s outputs."
        />
        <FeatureCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>}
          title="Engaging Community Platform"
          description="Our platform encourages interaction through a Stack-like community, where students, professors, and TAs collaborate and share knowledge. Gamification elements reward active participation and contributions."
        />
        <FeatureCard
          icon={<ChartNetwork className="w-6 h-6 text-white" />}
          title="Advanced Analytics for Educators"
          description="Educators and staff get access to detailed analytics through a dedicated dashboard, helping them identify learning gaps, monitor usage, and refine their teaching strategies."
        />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: {icon: any, title: any, description: any}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="w-12 h-12 bg-[#AF95E2] rounded-full mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
