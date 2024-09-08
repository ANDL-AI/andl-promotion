import Image from "next/image";
import AuthorizedLayout from "@/components/authorized-layout";
import Footer from "@/components/footer";
import HeaderNavBar from "@/components/header";
import TargetCarousel from "@/components/target-carousel";
import Paragraph from "@/components/paragraph";
import Waitlist from "@/components/waitlist";

export default function Home() {
  return (
    <main className="h-full w-full bg-hs-base">
      <HeaderNavBar/>
      <AuthorizedLayout>
        <div className="flex flex-col items-center justify-center space-y-12 pt-12 px-8 max-w-2xl">
          <Paragraph
            title="What is the Problem?"
            text="Although use of AI widespread now, there is little to no regulations when it comes to education side of things. 
            
            Students make use of it to naively get answers for their questions and assignments. 
            As a result, we see the misuse of and the inability to appropriately utilize AI, not 100% depend on it. 
            
            This can lead to a lack of understanding of the subject matter and a lack of critical thinking skills. Moreover, educational institutions have not yet been able to define proper guidelines for the use of AI in education and are unsure how they should govern/monitor the use of AI in their institutions."
            side="right"
          />
          <Paragraph
            title="What is ANDL?"
            text="ANDL is an StackOverflow-like AI platform targeting universities, students, TAs, and professors. We offer a way for students to work with course-level fine-tuned LLM with many AI-assistance elements to help them make educated decisions,
            an easy way for them to reinforce those models with their (as well as TAs' and professors') inputs, and a way for universities to monitor and control the flow of this whole process. 
            
            We offer these services but are not limited to them. So for more details, please sign up for the waitlist."
            side="left"
          />
          <Paragraph
            title="Why do WE solve it?"
            text="We've seen numerous times AI failing to properly tackle questions regarding our college studies. Even if it did, especially in more complex problems, we could not be sure of the answer as it does not provide any rationale or confidence.
            We've seen ChatGPT say 2 + 2 = 5 or the word strawberry has 2 r in it. In a high-stake domain like education, we do not want these absurdities further hinder global education."
            side="left"
          />
        </div>
        <Waitlist/>
        <div className="pt-0 pb-2">
          <TargetCarousel/>
        </div>
      </AuthorizedLayout>
      <Footer/>
    </main>
  );
}
