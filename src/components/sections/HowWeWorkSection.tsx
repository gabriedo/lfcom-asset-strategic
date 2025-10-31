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
    <section className="py-24 bg-gradient-to-b from-surface-black to-surface-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white">
            Como Atuamos
          </h2>
        </div>
        
        {/* Carousel for all screen sizes */}
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4 lg:-ml-6">
              {steps.map((step, index) => (
                <CarouselItem key={index} className="pl-4 lg:pl-6 basis-full md:basis-4/5 lg:basis-3/4">
                  <div className="group relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-black via-surface-black/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white">
                      <div className="space-y-4 lg:space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent-gold rounded-full flex items-center justify-center">
                            <step.icon className="w-7 h-7 lg:w-8 lg:h-8 text-surface-black" />
                          </div>
                          <span className="text-lg lg:text-xl font-semibold text-accent-gold">
                            0{index + 1}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl lg:text-5xl font-bold leading-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-lg lg:text-xl text-white/90 max-w-2xl">
                          {step.description}
                        </p>
                        
                        <ul className="space-y-3 mt-6">
                          {step.points.map((point, pointIndex) => (
                            <li 
                              key={pointIndex}
                              className="text-base lg:text-lg text-white/80 flex items-start"
                            >
                              <span className="w-2 h-2 bg-accent-gold rounded-full mr-4 mt-2 flex-shrink-0"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "w-10 bg-accent-gold" 
                    : "w-2.5 bg-white/30 hover:bg-white/50"
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