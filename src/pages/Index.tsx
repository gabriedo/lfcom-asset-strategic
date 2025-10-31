import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { QuizSection } from "@/components/sections/QuizSection";
import { ClientCasesSection } from "@/components/sections/ClientCasesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        <QuizSection />
        <ClientCasesSection />
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
