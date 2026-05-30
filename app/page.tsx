import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";
import NarrativeSection from "@/components/NarrativeSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar active="jigsaw" />
      <main>
        <HeroSection />
        <IntroSection />
        <NarrativeSection />
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}
