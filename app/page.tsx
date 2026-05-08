import Storytelling from "@/component/home/Storytelling";
import Background from "../component/Background";

import HeroSection from "../component/home/HeroSection";
// import ViewfinderCorners from "../component/home/ViewfinderCorners";
import Footer from "../component/navigation/Footer";
import Navbar from "../component/navigation/Header";
import Philosophy from "@/component/home/Philosophy";
import Creative from "@/component/home/Creative";
import FirstStepProject from "@/component/home/FirstStepProject";

import BharatVerse from "@/component/home/BhartVerse";
import BehindTheStories from "@/component/home/BehindTheStories";
import PincMoonStudio from "@/component/home/PincMoonStudio";



export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-serif text-[#333d42]">
      {/* Fixed background */}


      {/* Fixed viewfinder corners */}
      {/* <ViewfinderCorners /> */}

      {/* Fixed navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Background>
          <HeroSection />
          {/* <ComingSoonSection /> */}
          <Storytelling />


        </Background>
        <Philosophy />
        <Creative />
        <FirstStepProject />
        <BharatVerse />
        <BehindTheStories />
        <PincMoonStudio />
      </main>

      <Footer />
    </div>
  );
}
