import Image from "next/image";
import AuthorizedLayout from "@/components/authorized-layout";
import Footer from "@/components/footer";
import HeaderNavBar from "@/components/header";
import TargetCarousel from "@/components/target-carousel";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center bg-hs-base">
      <HeaderNavBar/> 
      <AuthorizedLayout>
        <div className="pt-16">
        <TargetCarousel/>
        </div>
      </AuthorizedLayout>
      <Footer/> 
    </main>
  );
}
