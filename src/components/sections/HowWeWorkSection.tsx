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
    <section className="py-24 bg-gradient-to-b from-surface-black to-surface-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white font-inter tracking-tight">
            Como Atuamos
          </h2>
        </div>
        
        {/* Carousel for all screen sizes */}
        <div className="relative -mx-4 lg:-mx-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {steps.map((step, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-[75%] md:basis-[70%] lg:basis-[60%]">
                  <div className="group relative h-[500px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-black/90 via-surface-black/40 to-transparent"></div>
                    
                    <div className="absolute inset-0 p-6 sm:p-8 lg:p-12 flex flex-col justify-end text-white">
                      <div className="space-y-3 sm:space-y-4 lg:space-y-6 font-inter">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-surface-black" />
                          </div>
                          <span className="text-base sm:text-lg lg:text-xl font-semibold text-accent-gold">
                            0{index + 1}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl font-normal">
                          {step.description}
                        </p>
                        
                        <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                          {step.points.map((point, pointIndex) => (
                            <li 
                              key={pointIndex}
                              className="text-sm sm:text-base lg:text-lg text-white/80 flex items-start font-normal"
                            >
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-gold rounded-full mr-3 sm:mr-4 mt-1.5 sm:mt-2 flex-shrink-0"></span>
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
          <div className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-12">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "w-8 sm:w-10 bg-accent-gold" 
                    : "w-2 sm:w-2.5 bg-white/30 hover:bg-white/50"
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