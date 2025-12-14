import HeroSection from "@/components/HeroSection";
import AcademySection from "@/components/AcademySection";
import PlaystationSection from "@/components/PlaystationSection";
import UtilitySection from "@/components/UtilitySection";
import CheckPointSection from "@/components/CheckPointSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AcademySection />
      <PlaystationSection />
      <UtilitySection />
      <CheckPointSection />
      <VisionSection />
      <Footer />
    </main>
  );
};

export default Index;
