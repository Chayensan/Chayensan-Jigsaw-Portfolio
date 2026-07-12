import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NarrativeSection from "@/components/NarrativeSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar active="jigsaw" />
      <main>
        <HeroSection />
        <NarrativeSection />
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}
