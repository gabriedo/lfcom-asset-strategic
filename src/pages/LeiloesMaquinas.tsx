import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Factory, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeiloesMaquinas = () => {
  const navigate = useNavigate();

  const benefits = [
    "Descontos de 40% a 65% sobre valor de mercado",
    "Modernização tecnológica acelerada",
    "ROI superior a 20% ao ano",
    "Payback médio inferior a 3 anos",
    "Otimização de CAPEX corporativo",
    "Vantagem competitiva sustentável"
  ];

  const categories = [
    {
      title: "Máquinas-Ferramenta",
      description: "Tornos CNC, centros de usinagem, prensas hidráulicas e equipamentos de precisão",
      icon: Settings
    },
    {
      title: "Linhas de Produção",
      description: "Sistemas automatizados, equipamentos de embalagem e linhas industriais completas",
      icon: Factory
    },
    {
      title: "Infraestrutura Industrial",
      description: "Geradores, compressores, sistemas de climatização e equipamentos de suporte",
      icon: Settings
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
                Máquinas e Equipamentos Industriais
              </h1>
              <p className="text-xl text-surface-light">
                Modernize suas operações com equipamentos de qualidade e descontos incomparáveis
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-surface-black mb-12 text-center">
                Vantagens da modernização via leilão
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

        {/* Categories Section */}
        <section className="py-20 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-surface-black mb-12 text-center">
                Categorias de equipamentos
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {categories.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <Card key={idx} className="border-t-4 border-t-accent-gold">
                      <CardHeader>
                        <Icon className="h-12 w-12 text-accent-blue mb-4" />
                        <CardTitle>{category.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{category.description}</CardDescription>
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
                Nossa metodologia técnica
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-blue text-surface-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-surface-black mb-2">Análise de Compatibilidade</h3>
                    <p className="text-surface-dark">
                      Avaliação técnica de integração com seus processos produtivos e infraestrutura existente.
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
                    <h3 className="text-xl font-bold text-surface-black mb-2">Inspeção Técnica Rigorosa</h3>
                    <p className="text-surface-dark">
                      Vistoria presencial por especialistas, análise de estado de conservação e vida útil remanescente.
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
                    <h3 className="text-xl font-bold text-surface-black mb-2">Modelagem de Retorno</h3>
                    <p className="text-surface-dark">
                      Cálculo de ROI, payback e análise de viabilidade econômica completa da aquisição.
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
                    <h3 className="text-xl font-bold text-surface-black mb-2">Suporte na Transferência</h3>
                    <p className="text-surface-dark">
                      Coordenação de desmontagem, transporte especializado, instalação e comissionamento.
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
                Modernize sua indústria com inteligência
              </h2>
              <p className="text-lg">
                Fale com nossos especialistas e descubra oportunidades de equipamentos para sua operação.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-surface-white text-surface-white hover:bg-surface-white hover:text-accent-blue"
                onClick={() => navigate("/contato")}
              >
                Agendar consulta
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

export default LeiloesMaquinas;