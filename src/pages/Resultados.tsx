import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Factory, Truck, Settings, Wheat } from "lucide-react";

const resultTypes = [
  { id: "all", label: "Todos", icon: null },
  { id: "imovel", label: "Imóveis", icon: Building },
  { id: "galpao", label: "Galpões", icon: Truck },
  { id: "fabrica", label: "Fábricas", icon: Factory },
  { id: "maquinario", label: "Maquinário", icon: Settings },
  { id: "agro", label: "Agro", icon: Wheat },
];

const mockResults = [
  {
    id: 1,
    type: "galpao",
    title: "Galpão Logístico",
    discount: "42%",
    thesis: "Renda",
    timeframe: "90 dias",
    result: "Cap rate 11,2% a.a.",
    highlights: ["Localização estratégica", "Alto potencial de valorização"]
  },
  {
    id: 2,
    type: "imovel",
    title: "Edifício Comercial",
    discount: "35%",
    thesis: "Valorização",
    timeframe: "120 dias",
    result: "ROI 28% a.a.",
    highlights: ["Centro financeiro", "Inquilinos AAA"]
  },
  {
    id: 3,
    type: "fabrica",
    title: "Planta Industrial",
    discount: "58%",
    thesis: "Operação",
    timeframe: "180 dias",
    result: "Break-even 18 meses",
    highlights: ["Infraestrutura completa", "Licenças regulares"]
  },
  {
    id: 4,
    type: "maquinario",
    title: "Linha de Produção",
    discount: "45%",
    thesis: "Trading",
    timeframe: "60 dias",
    result: "Liquidez imediata",
    highlights: ["Estado conservado", "Demanda alta"]
  },
  {
    id: 5,
    type: "imovel",
    title: "Torre Corporativa",
    discount: "38%",
    thesis: "Renda",
    timeframe: "150 dias",
    result: "Yield 9,8% a.a.",
    highlights: ["AAA Location", "Ocupação garantida"]
  },
  {
    id: 6,
    type: "galpao",
    title: "Centro Logístico",
    discount: "52%",
    thesis: "Valorização",
    timeframe: "110 dias",
    result: "Potencial 40% em 24m",
    highlights: ["Hub estratégico", "Expansão planejada"]
  },
  {
    id: 7,
    type: "imovel",
    title: "Casa de Veraneio",
    discount: "47%",
    thesis: "Renda + Uso",
    timeframe: "75 dias",
    result: "Ocupação 68% a.a.",
    highlights: ["Locação por temporada", "Região turística premium"]
  },
  {
    id: 8,
    type: "imovel",
    title: "Portfólio MCMV",
    discount: "31%",
    thesis: "Escala",
    timeframe: "200 dias",
    result: "12 unidades adquiridas",
    highlights: ["Baixa inadimplência", "Demanda estável garantida"]
  },
  {
    id: 9,
    type: "agro",
    title: "Fazenda com Lavoura de Milho",
    discount: "39%",
    thesis: "Operação + Renda",
    timeframe: "95 dias",
    result: "Produtividade 180 sc/ha",
    highlights: ["Safra em andamento", "Contrato de venda fechado"]
  },
  {
    id: 10,
    type: "agro",
    title: "Lote de Máquinas Agrícolas",
    discount: "54%",
    thesis: "Trading",
    timeframe: "45 dias",
    result: "Revenda em 30 dias",
    highlights: ["Colheitadeiras e tratores", "Alta liquidez no mercado"]
  }
];

const Resultados = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredResults = activeFilter === "all" 
    ? mockResults 
    : mockResults.filter(result => result.type === activeFilter);

  const getTypeIcon = (type: string) => {
    const typeConfig = resultTypes.find(t => t.id === type);
    return typeConfig?.icon || Building;
  };

  const getTypeLabel = (type: string) => {
    const typeConfig = resultTypes.find(t => t.id === type);
    return typeConfig?.label || "Ativo";
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-surface-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-hero text-surface-white">
                Casos reais, resultados comprovados
              </h1>
              <p className="text-xl text-surface-medium leading-relaxed">
                Cases reais de sucesso com segurança jurídica e resultados mensuráveis
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-surface-white border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {resultTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Button
                    key={type.id}
                    variant={activeFilter === type.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(type.id)}
                    className="flex items-center gap-2"
                  >
                    {Icon && <Icon size={16} />}
                    {type.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-20 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResults.map((result) => {
                const Icon = getTypeIcon(result.type);
                return (
                  <div 
                    key={result.id}
                    className="bg-surface-light p-6 rounded-2xl hover-lift space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-surface-black rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-surface-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {getTypeLabel(result.type)}
                        </Badge>
                      </div>
                      <span className="text-2xl font-bold text-accent-gold">
                        {result.discount}
                      </span>
                    </div>
                    
                    <h3 className="text-title text-surface-black">
                      {result.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-surface-medium">Tese:</span>
                        <p className="text-surface-black font-medium">{result.thesis}</p>
                      </div>
                      <div>
                        <span className="text-surface-medium">Prazo:</span>
                        <p className="text-surface-black font-medium">{result.timeframe}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-4">
                      <span className="text-surface-medium text-sm">Resultado:</span>
                      <p className="text-surface-black font-semibold">{result.result}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {result.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2"></span>
                          <span className="text-surface-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="py-12 bg-surface-light">
          <div className="container mx-auto px-4 text-center">
            <p className="text-caption text-surface-medium max-w-4xl mx-auto">
              <strong>Aviso Legal:</strong> Os resultados apresentados são baseados em operações reais executadas pela LFCOM. 
              Desempenho passado não garante resultados futuros. Investimentos em leilões envolvem riscos e devem ser 
              avaliados individualmente. Consulte nossa equipe para análise específica do seu perfil e objetivos.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-surface-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-display text-surface-white">
                Quer resultados similares?
              </h2>
              <p className="text-xl text-surface-medium">
                Converse com nossos especialistas sobre suas necessidades específicas
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contato">
                  Agendar conversa estratégica
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resultados;