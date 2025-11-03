import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { QuizSection } from "@/components/sections/QuizSection";
import { QuizResultsSection } from "@/components/sections/QuizResultsSection";
import { ClientCasesSection } from "@/components/sections/ClientCasesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({ setor: "", desafio: "" });

  const handleQuizComplete = (setor: string, desafio: string) => {
    setQuizAnswers({ setor, desafio });
    setQuizCompleted(true);
  };

  const handleQuizReset = () => {
    setQuizCompleted(false);
    setQuizAnswers({ setor: "", desafio: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        {!quizCompleted ? (
          <QuizSection onComplete={handleQuizComplete} />
        ) : (
          <QuizResultsSection 
            setor={quizAnswers.setor} 
            desafio={quizAnswers.desafio}
            onReset={handleQuizReset}
          />
        )}
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
