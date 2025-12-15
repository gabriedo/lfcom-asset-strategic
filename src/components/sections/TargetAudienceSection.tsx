import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cargoShipImage from "@/assets/cargo-ship.jpg";
import runnersImage from "@/assets/runners.jpg";

const audiences = [
  {
    image: cargoShipImage,
    title: "Empresas (CNPJ)",
    subtitle: "Expansão com inteligência",
    description: "Soluções sob medida para empresas que buscam crescimento estratégico através de aquisições inteligentes.",
    benefits: [
      "Imóveis corporativos com desconto",
      "Galpões e centros logísticos",
      "Plantas industriais e fábricas",
      "Maquinário e equipamentos",
      "Otimização de CAPEX"
    ]
  },
  {
    image: runnersImage,
    title: "Investidores (CPF/CNPJ)",
    subtitle: "Patrimônio estratégico",
    description: "Oportunidades exclusivas para investidores que desejam diversificar e crescer seu patrimônio.",
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-3xl group cursor-pointer hover-lift"
              style={{ minHeight: '700px' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={audience.image} 
                  alt={audience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={index === 0 ? { objectPosition: 'center center' } : { objectPosition: 'center top' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-black/95 via-surface-black/70 to-surface-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                <div className="space-y-4 backdrop-blur-sm bg-surface-black/20 p-6 rounded-2xl">
                  <div className="space-y-3">
                    <p className="text-sm text-surface-white/90 uppercase tracking-wider font-medium">
                      {audience.subtitle}
                    </p>
                    <h3 className="text-4xl lg:text-5xl font-bold text-surface-white leading-tight">
                      {audience.title}
                    </h3>
                    <p className="text-lg text-surface-white/95 max-w-md leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 pt-4">
                    {audience.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex}
                        className="text-base text-surface-white/95 flex items-start leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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