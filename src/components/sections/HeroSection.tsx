import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-surface-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-surface-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-hero text-surface-white text-balance animate-fade-in">
            Transformamos ativos de leilão em{" "}
            <span className="text-accent-gold">patrimônio estratégico</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-surface-medium max-w-3xl mx-auto leading-relaxed animate-slide-up text-balance">
            Segurança jurídica e inteligência de mercado para decisões de alto impacto
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-in-right">
            <Button asChild variant="hero" size="lg">
              <Link to="/contato">Falar com a LFCOM</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/solucoes">Conheça nossas soluções</Link>
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-surface-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-surface-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};