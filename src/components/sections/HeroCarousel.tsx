import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { posts } from "@/data/posts";
import type { CarouselApi } from "@/components/ui/carousel";
import { trackCTAClick } from "@/lib/analytics";

// Import images
import leioesEmpresarios from "@/assets/insights/leiloes-empresarios.jpg";
import maquinasIndustriais from "@/assets/insights/maquinas-industriais.jpg";
import checklistArrematacao from "@/assets/insights/checklist-arrematacao.jpg";
import reportLeiloes2026 from "@/assets/insights/report-leiloes-2026.jpg";

const heroSlides = [
  {
    id: "6",
    title: "Report Leilões 2026: Tendências e Oportunidades",
    excerpt: "Análise completa do mercado com dados de 2025, projeções e as tendências que irão moldar o setor.",
    slug: "report-leiloes-2026-tendencias-oportunidades",
    image: reportLeiloes2026,
    category: "Report Anual"
  },
  {
    id: posts[3]?.id || "4",
    title: "Os 7 erros que custam milhões em leilões",
    excerpt: "Checklist estratégico completo para evitar armadilhas e maximizar retorno em arrematações.",
    slug: "checklist-arrematacao-7-erros-leiloes",
    image: checklistArrematacao,
    category: "Guia Prático"
  },
  {
    id: posts[0].id,
    title: posts[0].title,
    excerpt: posts[0].excerpt,
    slug: posts[0].slug,
    image: leioesEmpresarios,
    category: "Estratégia Corporativa"
  },
  {
    id: posts[2].id,
    title: posts[2].title,
    excerpt: posts[2].excerpt,
    slug: posts[2].slug,
    image: maquinasIndustriais,
    category: "Modernização Industrial"
  }
];

export const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Autoplay
    const interval = setInterval(() => {
      api.scrollNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel 
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="h-full w-full"
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-screen relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="max-w-3xl space-y-6 animate-fade-in">
                    {/* Category */}
                    <div className="inline-block">
                      <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        {slide.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-lg md:text-xl text-surface-medium max-w-2xl leading-relaxed">
                      {slide.excerpt}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Button asChild variant="default" size="lg">
                        <Link to={`/insights/${slide.slug}`}>Ler análise completa</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                        <Link to="/contato" onClick={() => trackCTAClick("Falar com especialista", "HeroCarousel")}>Falar com especialista</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
        <CarouselPrevious className="hidden md:flex left-4 lg:left-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="hidden md:flex right-4 lg:right-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />

        {/* Dot Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? "w-12 bg-white" 
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
