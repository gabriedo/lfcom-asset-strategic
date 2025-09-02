import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <HowWeWorkSection />
        <TargetAudienceSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
