import React from 'react'
import { HandHelping, ChartNetwork, MessageSquare } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="px-4 py-12 relative -z-10">
      <h2 className="text-2xl font-bold text-center mb-8">
        Empowering Education with ANDL's Responsible and Explainable AI Solutions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <FeatureCard
          icon={<HandHelping className="w-6 h-6 text-white" />}
          title="Comprehensive Response Assistance"
          description="ANDL provides detailed clarity metrics like rationale, counterfactuals, bias, and confidence alongside each response, ensuring a deeper understanding of the AI's outputs."
        />
        <FeatureCard
          icon={<MessageSquare className="w-6 h-6 text-white" />}
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
  )
}

const FeatureCard = ({ icon, title, description }: {icon: any, title: any, description: any}) => {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm">
      <div className="w-12 h-12 bg-gradient-to-br from-[#AF95E2] to-[#6321E6] rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}