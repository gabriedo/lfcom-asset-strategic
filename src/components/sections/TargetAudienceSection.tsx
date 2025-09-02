import { Building2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const audiences = [
  {
    icon: Building2,
    title: "Empresas (CNPJ)",
    subtitle: "Expansão com inteligência",
    benefits: [
      "Imóveis corporativos com desconto",
      "Galpões e centros logísticos",
      "Plantas industriais e fábricas",
      "Maquinário e equipamentos",
      "Otimização de CAPEX"
    ]
  },
  {
    icon: TrendingUp,
    title: "Investidores (CPF/CNPJ)",
    subtitle: "Patrimônio estratégico",
    benefits: [
      "Diversificação patrimonial",
      "Estratégias de renda e crescimento",
      "Controle de risco estruturado",
      "Oportunidades exclusivas",
      "Assessoria especializada"
    ]
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-surface-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-display text-surface-black">
            Para quem é a LFCOM
          </h2>
          <p className="text-xl text-surface-medium max-w-2xl mx-auto">
            Soluções específicas para empresas e investidores que pensam grande
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-surface-light p-8 rounded-2xl space-y-6 hover-lift"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-surface-black rounded-full flex items-center justify-center">
                  <audience.icon className="w-8 h-8 text-surface-white" />
                </div>
                <div>
                  <h3 className="text-headline text-surface-black">
                    {audience.title}
                  </h3>
                  <p className="text-body text-surface-medium">
                    {audience.subtitle}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li 
                    key={benefitIndex}
                    className="text-body text-surface-black flex items-start"
                  >
                    <span className="w-2 h-2 bg-accent-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="secondary" size="lg">
            <Link to="/solucoes">Ver todas as soluções</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};