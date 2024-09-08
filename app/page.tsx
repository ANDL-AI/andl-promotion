import Image from "next/image";
import AuthorizedLayout from "@/components/authorized-layout";
import Footer from "@/components/footer";
import TargetCarousel from "@/components/target-carousel";
import Paragraph from "@/components/paragraph";
import Waitlist from "@/components/waitlist";
import HeaderNavBar from "@/components/header";
import Pricing from "@/components/pricing-plan";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <HeaderNavBar />
      <div className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8 mt-16 text-indigo-400">Welcome to ANDL</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Paragraph
              title="What is the Problem?"
              text="Although use of AI is widespread now, there is little to no regulation when it comes to education. Students often naively use AI to get answers for their questions and assignments, leading to a lack of understanding and critical thinking skills. Educational institutions struggle to define proper guidelines for AI use."
              side="left"
            />
            <Paragraph
              title="What is ANDL?"
              text="ANDL is a StackOverflow-like AI platform targeting universities, students, TAs, and professors. We offer a way for students to work with course-level fine-tuned LLM with AI-assistance elements to help them make educated decisions, while allowing institutions to monitor and control the process."
              side="right"
            />
          </div>
        </section>
  

        <section className="mb-16">
          <Pricing />
        </section>

        <section className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4 space-y-16 lg:space-y-0 items-stretch lg:items-stretch w-full max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 flex-grow flex items-stretch">
            <Waitlist />
          </div>
          <div className="w-full lg:w-1/2 flex-grow flex items-stretch">
            <ContactForm />
          </div>
        </section>

      </div>

      <section className="bg-gray-800 py-8">
        <TargetCarousel />
      </section>

      <Footer />
    </main>
  );
}
