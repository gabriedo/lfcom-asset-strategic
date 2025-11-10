import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-surface-black text-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-hero mb-6 animate-fade-in">
                Quem somos: uma empresa de família com visão de futuro
              </h1>
              <p className="text-xl text-surface-medium mb-8 animate-slide-up leading-relaxed">
                A tradição familiar encontra a governança corporativa para transformar 
                ativos de leilão em patrimônio estratégico.
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-body leading-relaxed mb-8">
                  <strong>A LFCOM nasceu da união entre tradição familiar e visão corporativa.</strong> 
                  Somos uma empresa de família que entendeu que o futuro dos negócios exige mais do que 
                  intuição e relacionamentos: exige processos, dados e governança rigorosa.
                </p>
                
                <p className="text-body leading-relaxed mb-8">
                  Nossa essência combina a <strong>confiança e compromisso</strong> de uma empresa familiar 
                  com a <strong>precisão e transparência</strong> de uma consultoria de primeiro mundo. 
                  Transformamos o que tradicionalmente era visto como "negócio de oportunista" em 
                  <strong> estratégia patrimonial sistemática</strong>, blindada juridicamente e 
                  fundamentada em inteligência de dados.
                </p>
                
                <p className="text-body leading-relaxed mb-8">
                  Não somos apenas intermediários. Somos <strong>arquitetos de patrimônio</strong> para 
                  empresários e investidores que pensam grande. Nossa metodologia de due diligence em 4 camadas 
                  (jurídica, fiscal, técnica e estratégica) garante que cada operação seja uma decisão calculada, 
                  não uma aposta.
                </p>
                
                <p className="text-body leading-relaxed mb-12">
                  <strong>Resultado:</strong> mais de R$ 500 milhões em ativos analisados, 98,2% de taxa de sucesso 
                  e a confiança de investidores que exigem previsibilidade, controle de risco e execução sênior. 
                  A LFCOM representa a evolução natural do mercado de leilões: onde tradição e inovação se encontram 
                  para criar valor real e duradouro.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">R$ 500M+</div>
                  <div className="text-surface-medium">em ativos analisados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">98,2%</div>
                  <div className="text-surface-medium">taxa de sucesso</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-surface-medium">clientes atendidos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-surface-black text-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-display mb-6">
                LFCOM: tradição familiar, execução corporativa
              </h2>
              <p className="text-xl text-surface-medium mb-8 leading-relaxed">
                Pronto para transformar oportunidades de leilão em patrimônio estratégico com 
                a segurança de processos blindados e a confiança de uma empresa familiar?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <a href="https://calendly.com/gabriel-lfcom/30min" target="_blank" rel="noopener noreferrer">
                    Agendar conversa estratégica
                  </a>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <a href="https://wa.me/5541920030105" target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;