import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TrendingUp, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeiloesPatrimonio = () => {
  const navigate = useNavigate();

  const benefits = [
    "Descontos de até 50% sobre o valor de mercado",
    "Segurança jurídica com processo regulamentado",
    "Diversificação patrimonial estratégica",
    "Potencial de valorização de longo prazo",
    "Geração de renda através de locação",
    "Proteção contra volatilidade de mercado"
  ];

  const types = [
    {
      title: "Imóveis Comerciais",
      description: "Escritórios, lojas e prédios corporativos em localizações estratégicas",
      icon: Building2
    },
    {
      title: "Galpões Industriais",
      description: "Complexos logísticos e industriais com infraestrutura completa",
      icon: Building2
    },
    {
      title: "Terrenos Urbanos",
      description: "Áreas para desenvolvimento imobiliário em regiões de expansão",
      icon: Building2
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
                Leilões de Patrimônio Imobiliário
              </h1>
              <p className="text-xl text-surface-light">
                Aquisição estratégica de imóveis comerciais e industriais com descontos significativos
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-surface-black mb-12 text-center">
                Por que investir em leilões imobiliários?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent-blue flex-shrink-0 mt-1" />
                    <p className="text-surface-dark">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-20 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-surface-black mb-12 text-center">
                Tipos de patrimônio disponíveis
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {types.map((type, idx) => {
                  const Icon = type.icon;
                  return (
                    <Card key={idx} className="border-t-4 border-t-accent-gold">
                      <CardHeader>
                        <Icon className="h-12 w-12 text-accent-blue mb-4" />
                        <CardTitle>{type.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{type.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-surface-black mb-12 text-center">
                Nossa metodologia
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-blue text-surface-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-surface-black mb-2">Identificação de Oportunidades</h3>
                    <p className="text-surface-dark">
                      Monitoramento contínuo de leilões judiciais e extrajudiciais, identificando ativos com potencial de valorização.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-blue text-surface-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-surface-black mb-2">Due Diligence Completa</h3>
                    <p className="text-surface-dark">
                      Análise jurídica, técnica e financeira rigorosa para garantir segurança na aquisição.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-blue text-surface-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-surface-black mb-2">Estratégia de Lance</h3>
                    <p className="text-surface-dark">
                      Definição de preço-limite fundamentado em análise comparativa de mercado e projeção de retorno.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-blue text-surface-white flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-surface-black mb-2">Gestão Pós-Aquisição</h3>
                    <p className="text-surface-dark">
                      Suporte na regularização, valorização e gestão do ativo adquirido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent-blue text-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">
                Pronto para expandir seu patrimônio estrategicamente?
              </h2>
              <p className="text-lg">
                Agende uma consulta e descubra as oportunidades disponíveis no mercado de leilões.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-surface-white text-surface-white hover:bg-surface-white hover:text-accent-blue"
                onClick={() => navigate("/contato")}
              >
                Fale com um especialista
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

export default LeiloesPatrimonio;