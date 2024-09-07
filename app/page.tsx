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
            title="Exploring New Horizons"
            text="Discover innovative solutions and groundbreaking research in the field of technology. Our platform is dedicated to providing the latest advancements and insights to help you stay ahead of the curve."
            side="left"
          />
          <Paragraph
            title="Empowering Education"
            text="Join us in transforming the educational landscape. Our tools and resources are designed to enhance learning experiences, making education more accessible and engaging for everyone."
            side="right"
          />
          <Paragraph
            title="Building a Better Future"
            text="We are committed to creating a positive impact through our initiatives. By collaborating with leading experts and organizations, we aim to address critical challenges and drive progress in our community."
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
