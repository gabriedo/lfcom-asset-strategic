import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileSearch, Scale, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DueDiligence = () => {
  const navigate = useNavigate();

  const layers = [
    {
      title: "Análise Jurídica",
      description: "Verificação completa de cadeia dominial, certidões, processos e ônus",
      icon: Scale,
      items: [
        "Cadeia dominial de 20 anos",
        "Certidões em todos os cartórios",
        "Mapeamento de processos correlatos",
        "Análise de ônus e gravames"
      ]
    },
    {
      title: "Análise Fiscal",
      description: "Levantamento de débitos tributários e contingências fiscais",
      icon: FileSearch,
      items: [
        "IPTU e taxas municipais",
        "ITR para imóveis rurais",
        "Débitos trabalhistas",
        "Planejamento tributário"
      ]
    },
    {
      title: "Análise Técnica",
      description: "Vistoria presencial e avaliação de estado de conservação",
      icon: Shield,
      items: [
        "Laudo técnico detalhado",
        "Estado de conservação",
        "Sistemas prediais",
        "Estimativa de adequações"
      ]
    },
    {
      title: "Análise Estratégica",
      description: "Modelagem financeira e análise de viabilidade econômica",
      icon: TrendingUp,
      items: [
        "Alinhamento com objetivos",
        "Projeção de fluxo de caixa",
        "Análise de sensibilidade",
        "Matriz de risco-retorno"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-surface-black to-surface-dark text-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Due Diligence em 4 Camadas
              </h1>
              <p className="text-xl text-surface-light">
                Metodologia proprietária que garante segurança jurídica e maximiza retorno
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-surface-black">
                Governança como vantagem competitiva
              </h2>
              <p className="text-lg text-surface-dark">
                Nossa experiência demonstra que 70% dos problemas em aquisições de leilão decorrem 
                de due diligence inadequada. Desenvolvemos protocolo proprietário que combina rigor 
                jurídico, precisão técnica e inteligência estratégica.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Layers Section */}
        <section className="py-20 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-surface-black mb-12 text-center">
                As 4 camadas de análise
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {layers.map((layer, idx) => {
                  const Icon = layer.icon;
                  return (
                    <Card key={idx} className="border-l-4 border-l-accent-gold">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <Icon className="h-12 w-12 text-accent-blue" />
                          <div>
                            <div className="text-sm text-accent-red font-semibold mb-1">
                              Camada {idx + 1}
                            </div>
                            <CardTitle>{layer.title}</CardTitle>
                          </div>
                        </div>
                        <CardDescription>{layer.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {layer.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-accent-blue flex-shrink-0 mt-0.5" />
                              <span className="text-surface-dark text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-surface-black mb-12 text-center">
                O que você recebe
              </h2>
              <div className="space-y-6">
                <Card className="border-t-4 border-t-accent-blue">
                  <CardHeader>
                    <CardTitle>Parecer Executivo Integrado</CardTitle>
                    <CardDescription>
                      Documento consolidado integrando todas as 4 camadas de análise, com recomendação 
                      técnica fundamentada sobre a viabilidade da aquisição.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-t-4 border-t-accent-blue">
                  <CardHeader>
                    <CardTitle>Estratégia de Lance</CardTitle>
                    <CardDescription>
                      Definição de preço-limite recomendado baseado em análise comparativa de mercado, 
                      modelagem de fluxo de caixa e projeção de retorno.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-t-4 border-t-accent-blue">
                  <CardHeader>
                    <CardTitle>Plano de Mitigação de Riscos</CardTitle>
                    <CardDescription>
                      Identificação de todos os riscos detectados com estratégias específicas de mitigação, 
                      provisões necessárias e cronograma de regularização.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-t-4 border-t-accent-blue">
                  <CardHeader>
                    <CardTitle>Roadmap Pós-Aquisição</CardTitle>
                    <CardDescription>
                      Cronograma detalhado de ações necessárias após a arrematação, incluindo regularizações, 
                      adequações e etapas para início de operação ou locação.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-surface-black mb-12 text-center">
                Casos de sucesso
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-accent-blue">Galpão Logístico - São Paulo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-surface-dark mb-4">
                      Nossa due diligence identificou passivo ambiental não declarado de R$ 1,2 milhão. 
                    </p>
                    <p className="text-surface-dark font-semibold">
                      Resultado: Renegociação com desconto adicional de R$ 800 mil para remediação, 
                      mantendo ROI projetado de 18% ao ano.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-accent-blue">Indústria Têxtil - Interior de SP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-surface-dark mb-4">
                      Análise técnica revelou necessidade de modernização elétrica não prevista.
                    </p>
                    <p className="text-surface-dark font-semibold">
                      Resultado: Ajuste no lance permitiu ROI de 24% mesmo com investimentos 
                      adicionais de R$ 320 mil em adequações.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent-blue text-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">
                Proteja seu investimento com análise rigorosa
              </h2>
              <p className="text-lg">
                Solicite nossa due diligence especializada e tome decisões com segurança e previsibilidade.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-surface-white text-surface-white hover:bg-surface-white hover:text-accent-blue"
                onClick={() => navigate("/contato")}
              >
                Solicitar análise
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DueDiligence;