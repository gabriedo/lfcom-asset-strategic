import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-surface-black">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-display text-surface-white">
            LFCOM: assessoria de leilões para quem{" "}
            <span className="text-accent-gold">pensa grande</span>
          </h2>
          
          <p className="text-xl text-surface-medium leading-relaxed">
            Estratégia, governança e execução para transformar leilões em patrimônio
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/contato">
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Agendar conversa estratégica
              </Link>
            </Button>
            
            <Button asChild variant="hero-outline" size="lg" className="group">
              <a 
                href="https://wa.me/5541920030105" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
          
          <p className="text-caption text-surface-medium pt-4">
            Resposta em até 24h • Consulta inicial sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};