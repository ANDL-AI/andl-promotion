import React from 'react';
import FaqDropdownCard from '@/components/faq-dropdown-card';
import AuthorizedLayout from "@/components/authorized-layout"
import Footer from "@/components/footer"
import HeaderNavBar from "@/components/header"

const faqs = [
  {
    question: "Why do WE solve it?",
    answer: "We've seen numerous times AI failing to properly tackle questions regarding our college studies. Even if it did, especially in more complex problems, we could not be sure of the answer as it does not provide any rationale or confidence. We've seen ChatGPT say 2 + 2 = 5 or the word strawberry has 2 r in it. In a high-stake domain like education, we do not want these absurdities further hinder global education."
  },
  // Add more FAQ items here
];

const FaqPage: React.FC = () => {
  return (
    <div>
        <HeaderNavBar/>
        <AuthorizedLayout>
    <section className="bg-gray-900 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-8 text-hs-base text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqDropdownCard
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
    </AuthorizedLayout>
        <Footer/>
    </div>
  );
};

export default FaqPage;
