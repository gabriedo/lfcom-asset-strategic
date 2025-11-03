import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, Lightbulb } from "lucide-react";

interface Recommendation {
  title: string;
  description: string;
  cta: string;
  link: string;
}

const recommendations: Record<string, Record<string, Recommendation[]>> = {
  "Varejo": {
    "Expansão de patrimônio": [
      {
        title: "Navegador de Preços",
        description: "Práticas de precificação indisciplinadas podem corroer sua lucratividade — muitas vezes de forma imperceptível. O Pricing Navigator permite que você assuma o controle de todo o seu sistema de precificação, destacando oportunidades de margem.",
        cta: "Leia mais",
        link: "/solucoes"
      },
      {
        title: "Capacidade de Fusões e Aquisições",
        description: "Para alcançar um crescimento robusto por meio de fusões e aquisições, é imprescindível desenvolver um modelo replicável baseado em quatro disciplinas-chave. As taxas de sucesso dobram quando você domina essas competências.",
        cta: "Leia mais",
        link: "/solucoes"
      },
      {
        title: "Remuneração de Vendas",
        description: "Um plano de remuneração de vendas adequado pode impulsionar o desempenho como nenhuma outra coisa, mas poucos líderes acreditam que seus planos sejam realmente eficazes. O Sales Compensation Navigator ajuda você a criar o plano perfeito.",
        cta: "Leia mais",
        link: "/solucoes"
      }
    ],
    "Análise de Dados": [
      {
        title: "Inteligência de Mercado",
        description: "Transforme dados em decisões estratégicas com nossa plataforma de análise de mercado em tempo real, identificando oportunidades antes da concorrência.",
        cta: "Leia mais",
        link: "/solucoes"
      },
      {
        title: "Analytics Avançado",
        description: "Implemente modelos preditivos e prescritivos que antecipam tendências e otimizam operações, maximizando seu retorno sobre investimento.",
        cta: "Leia mais",
        link: "/solucoes"
      },
      {
        title: "Dashboard Executivo",
        description: "Visualize KPIs críticos e tome decisões baseadas em dados com painéis personalizados que consolidam informações de múltiplas fontes.",
        cta: "Leia mais",
        link: "/solucoes"
      }
    ],
    "default": [
      {
        title: "Estratégia de Varejo",
        description: "Desenvolvemos soluções personalizadas para o setor de varejo, focadas em crescimento sustentável e eficiência operacional.",
        cta: "Leia mais",
        link: "/solucoes"
      },
      {
        title: "Otimização de Operações",
        description: "Maximize a eficiência da sua cadeia de suprimentos e operações de loja com nossas metodologias comprovadas.",
        cta: "Leia mais",
        link: "/solucoes"
      },
      {
        title: "Experiência do Cliente",
        description: "Transforme a jornada do cliente com estratégias omnichannel que aumentam conversão e fidelização.",
        cta: "Leia mais",
        link: "/solucoes"
      }
    ]
  },
  "default": {
    "default": [
      {
        title: "Consultoria Estratégica",
        description: "Soluções personalizadas para impulsionar o crescimento e transformação do seu negócio com foco em resultados mensuráveis.",
        cta: "Leia mais",
        link: "/solucoes"
      },
      {
        title: "Due Diligence",
        description: "Análise profunda de oportunidades de investimento e aquisição, minimizando riscos e maximizando valor.",
        cta: "Leia mais",
        link: "/solucoes"
      },
      {
        title: "Transformação Digital",
        description: "Acelere a digitalização do seu negócio com estratégias que combinam tecnologia e processos otimizados.",
        cta: "Leia mais",
        link: "/solucoes"
      }
    ]
  }
};

const QuizResultado = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [setor, setSetor] = useState<string>("");
  const [desafio, setDesafio] = useState<string>("");

  useEffect(() => {
    const setorParam = searchParams.get("setor") || "";
    const desafioParam = searchParams.get("desafio") || "";
    setSetor(setorParam);
    setDesafio(desafioParam);

    // Se não houver parâmetros, redirecionar para home
    if (!setorParam || !desafioParam) {
      navigate("/");
    }
  }, [searchParams, navigate]);

  const getRecommendations = (): Recommendation[] => {
    const setorRecs = recommendations[setor] || recommendations["default"];
    return setorRecs[desafio] || setorRecs["default"] || recommendations["default"]["default"];
  };

  const recs = getRecommendations();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-surface-light to-surface-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-surface-black">
                Você selecionou <span className="text-accent-blue">{setor}</span> como seu setor e{" "}
                <span className="text-accent-blue">{desafio}</span> como sua necessidade de negócios.
              </h1>
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="border-accent-red text-accent-red hover:bg-accent-red hover:text-surface-white"
              >
                REINICIAR
              </Button>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="py-16 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-surface-black mb-8">
                Recomendado para você
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {recs.map((rec, idx) => (
                  <Card key={idx} className="border-t-4 border-t-accent-red hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-surface-black">{rec.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-surface-dark text-sm leading-relaxed">
                        {rec.description}
                      </CardDescription>
                      <Button
                        variant="link"
                        className="text-accent-red p-0 h-auto font-semibold"
                        onClick={() => navigate(rec.link)}
                      >
                        {rec.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-16 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-surface-black">
                    Passos ousados em frente.
                  </h2>
                  <p className="text-lg text-surface-dark">
                    Veja como ajudamos clientes ambiciosos a alcançar resultados extraordinários.
                  </p>
                </div>
                <div className="grid gap-6">
                  <Card className="border-l-4 border-l-accent-gold">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Target className="h-8 w-8 text-accent-blue flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg">Caso de sucesso de cliente em destaque</CardTitle>
                          <CardDescription className="mt-2">
                            Como líderes do setor alcançaram crescimento de 300% com nossa metodologia comprovada
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                  <Card className="border-l-4 border-l-accent-gold">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Lightbulb className="h-8 w-8 text-accent-blue flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg">Como nós ajudamos</CardTitle>
                          <CardDescription className="mt-2">
                            Consultoria estratégica personalizada focada em resultados mensuráveis e sustentáveis
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <TrendingUp className="h-12 w-12 text-accent-blue mx-auto" />
              <h2 className="text-3xl font-bold text-surface-black">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-lg text-surface-dark">
                Agende uma conversa estratégica com nossos especialistas e descubra como podemos ajudar você a alcançar resultados extraordinários.
              </p>
              <Button
                size="lg"
                className="bg-accent-red hover:bg-accent-red/90 text-surface-white"
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

export default QuizResultado;