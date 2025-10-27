import { useState, useEffect } from "react";
import { Search, FileCheck, Target, Key } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import mappingImage from "@/assets/process/mapping.jpg";
import dueDiligenceImage from "@/assets/process/due-diligence.jpg";
import strategyImage from "@/assets/process/strategy.jpg";
import postAcquisitionImage from "@/assets/process/post-acquisition.jpg";

const steps = [
  {
    icon: Search,
    title: "Mapeamento de Oportunidades",
    description: "Análise detalhada de editais e processos para identificar os melhores ativos estratégicos",
    image: mappingImage,
    points: [
      "Análise de editais e processos",
      "Identificação de ativos estratégicos",
      "Avaliação preliminar de potencial"
    ]
  },
  {
    icon: FileCheck,
    title: "Due Diligence Completa",
    description: "Investigação profunda para garantir segurança jurídica e técnica na aquisição",
    image: dueDiligenceImage,
    points: [
      "Análise jurídica e fiscal detalhada",
      "Vistoria técnica especializada",
      "Validação de documentação"
    ]
  },
  {
    icon: Target,
    title: "Estratégia & Lance",
    description: "Planejamento estratégico e execução otimizada para maximizar resultado",
    image: strategyImage,
    points: [
      "Definição de teto estratégico",
      "Planejamento de participação",
      "Execução do lance otimizado"
    ]
  },
  {
    icon: Key,
    title: "Pós-aquisição",
    description: "Suporte completo para garantir a posse e liquidez do bem adquirido",
    image: postAcquisitionImage,
    points: [
      "Imissão na posse do bem",
      "Regularização documental",
      "Suporte para liquidez"
    ]
  }
];

export const HowWeWorkSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 bg-surface-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-display text-surface-black">
            Como Atuamos
          </h2>
          <p className="text-xl text-surface-medium max-w-2xl mx-auto">
            Processo estruturado e rigoroso para maximizar segurança e resultado
          </p>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group bg-surface-light rounded-2xl overflow-hidden hover-lift transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-surface-black" />
                  </div>
                  <span className="text-sm text-white font-semibold">
                    0{index + 1}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-title text-surface-black font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm text-surface-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {steps.map((step, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <div className="group bg-surface-light rounded-2xl overflow-hidden hover-lift transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-black/70 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                            <step.icon className="w-6 h-6 text-surface-black" />
                          </div>
                          <span className="text-sm font-semibold">
                            0{index + 1}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold">
                          {step.title}
                        </h3>
                        <p className="text-sm text-white/90">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <ul className="space-y-2">
                        {step.points.map((point, pointIndex) => (
                          <li 
                            key={pointIndex}
                            className="text-sm text-surface-medium flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "w-8 bg-accent-gold" 
                    : "w-2 bg-surface-medium/30"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};