import { cookies } from "next/headers";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import HomePreloader from "@/components/HomePreloader";
import Navbar from "@/components/Navbar";
import NarrativeSection from "@/components/NarrativeSection";
import ThroughlineSection from "@/components/ThroughlineSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  const shouldPlayEntrance =
    cookies().get("desi_home_preloader_seen")?.value !== "1";

  return (
    <HomePreloader shouldPlay={shouldPlayEntrance}>
      <Navbar active="jigsaw" />
      <main>
        <HeroSection />
        <ThroughlineSection />
        <NarrativeSection />
        <WorkSection />
        <CommunitySection />
        <HomeAboutSection />
      </main>
      <Footer />
    </HomePreloader>
  );
}
