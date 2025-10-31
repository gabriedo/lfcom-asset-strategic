import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseClient1 from "@/assets/case-client-1.jpg";
import caseClient2 from "@/assets/case-client-2.jpg";

const cases = [
  {
    id: 1,
    category: "Caso de sucesso de cliente em destaque",
    title: "Como uma mentalidade orientada por dados impulsiona o crescimento",
    client: "Indústria de Máquinas Pesadas",
    description: "Aquisição estratégica de equipamentos industriais via leilões resultou em economia de 45% e expansão da capacidade produtiva.",
    image: caseClient1,
    link: "/resultados"
  },
  {
    id: 2,
    category: "Como nós ajudamos",
    title: "Equipe de Inovação e Estratégia LFCOM",
    client: "Assessoria Completa",
    description: "Nossa equipe especializada combina análise de mercado, due diligence e execução estratégica para maximizar resultados.",
    image: caseClient2,
    link: "/sobre"
  }
];

export const ClientCasesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-surface-white to-surface-light">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-surface-black font-inter">
              Passos ousados em frente.
            </h2>
            <p className="text-lg text-surface-dark max-w-3xl">
              Veja como ajudamos clientes ambiciosos a alcançar resultados extraordinários.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className="group relative bg-surface-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Decorative Pattern */}
                {index === 0 && (
                  <div className="absolute top-0 left-0 w-32 h-full bg-accent-gold opacity-10">
                    <div className="grid grid-cols-4 gap-2 p-4 h-full">
                      {[...Array(48)].map((_, i) => (
                        <div
                          key={i}
                          className="h-4 bg-accent-gold transform -rotate-45"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="relative p-8 lg:p-10 space-y-6">
                  <div className="space-y-4">
                    <span className="text-sm font-semibold text-accent-gold uppercase tracking-wide">
                      {caseItem.category}
                    </span>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-surface-black font-inter leading-tight">
                      {caseItem.title}
                    </h3>
                    
                    <p className="text-surface-dark leading-relaxed">
                      {caseItem.description}
                    </p>
                  </div>

                  <Button
                    variant="link"
                    className="text-accent-gold hover:text-accent-gold/80 p-0 h-auto font-semibold group/btn"
                    asChild
                  >
                    <a href={caseItem.link}>
                      {index === 0 ? "Leia a história" : "Veja a oferta"}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>

                {/* Image Section */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-surface-white font-semibold text-lg">
                      {caseItem.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
