import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NarrativeSection from "@/components/NarrativeSection";
import ThroughlineSection from "@/components/ThroughlineSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar active="jigsaw" />
      <main>
        <HeroSection />
        <ThroughlineSection />
        <NarrativeSection />
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}
