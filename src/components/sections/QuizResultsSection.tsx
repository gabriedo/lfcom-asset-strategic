import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { posts } from "@/data/posts";

interface QuizResultsSectionProps {
  setor: string;
  desafio: string;
  onReset: () => void;
}

interface Recommendation {
  title: string;
  description: string;
  link: string;
}

const recommendations: Record<string, Record<string, Recommendation[]>> = {
  "Varejo": {
    "Expansão de patrimônio": [
      {
        title: "Leilões de Patrimônio Comercial",
        description: "Aquisição estratégica de imóveis comerciais em leilão com descontos de até 50%, expandindo seu portfólio com investimento inteligente.",
        link: "/leiloes-patrimonio"
      },
      {
        title: "Máquinas e Equipamentos Industriais",
        description: "Modernize suas operações adquirindo maquinário industrial de qualidade em leilões judiciais e extrajudiciais com preços incomparáveis.",
        link: "/leiloes-maquinas"
      },
      {
        title: "Due Diligence Especializada",
        description: "Análise técnica e jurídica completa de ativos em leilão, garantindo segurança e maximizando o retorno do seu investimento.",
        link: "/due-diligence"
      }
    ],
    "Aquisição estratégica": [
      {
        title: "Fusões e Aquisições via Leilão",
        description: "Oportunidades únicas de aquisição de empresas e unidades produtivas através de processos de recuperação judicial e falência.",
        link: "/leiloes-empresas"
      },
      {
        title: "Consultoria em Leilões Estratégicos",
        description: "Identificamos e estruturamos operações de aquisição em leilões alinhadas à sua estratégia de crescimento e expansão.",
        link: "/consultoria-leiloes"
      },
      {
        title: "Gestão de Portfólio de Ativos",
        description: "Administração profissional de ativos adquiridos em leilão, transformando oportunidades em patrimônio de alto valor.",
        link: "/gestao-ativos"
      }
    ],
    "default": [
      {
        title: "Leilões Empresariais",
        description: "Acesso exclusivo a leilões de alto valor com foco em maximizar retornos através de aquisições estratégicas.",
        link: "/leiloes-empresas"
      },
      {
        title: "Patrimônio Imobiliário",
        description: "Oportunidades em imóveis comerciais e residenciais com potencial de valorização significativa.",
        link: "/leiloes-patrimonio"
      },
      {
        title: "Análise de Viabilidade",
        description: "Estudos detalhados de viabilidade técnica, jurídica e financeira para investimentos em leilão.",
        link: "/due-diligence"
      }
    ]
  },
  "Capital Privado": {
    "default": [
      {
        title: "Oportunidades para Fundos de Investimento",
        description: "Leilões estruturados para fundos de private equity com foco em ativos distressed e recuperação de valor.",
        link: "/leiloes-empresas"
      },
      {
        title: "Estruturação de Operações",
        description: "Assessoria completa na estruturação e execução de aquisições via leilão judicial e extrajudicial.",
        link: "/consultoria-leiloes"
      },
      {
        title: "Gestão Pós-Aquisição",
        description: "Suporte na gestão e valorização de ativos adquiridos, maximizando retorno sobre investimento.",
        link: "/gestao-ativos"
      }
    ]
  },
  "default": {
    "default": [
      {
        title: "Leilões Estratégicos",
        description: "Plataforma completa de leilões judiciais e extrajudiciais com curadoria especializada em ativos de alto valor.",
        link: "/leiloes-empresas"
      },
      {
        title: "Consultoria Especializada",
        description: "Análise profunda e estratégica de oportunidades em leilão, garantindo decisões informadas e seguras.",
        link: "/consultoria-leiloes"
      },
      {
        title: "Due Diligence Completa",
        description: "Avaliação técnica, jurídica e financeira detalhada de todos os ativos antes da aquisição.",
        link: "/due-diligence"
      }
    ]
  }
};

export const QuizResultsSection = ({ setor, desafio, onReset }: QuizResultsSectionProps) => {
  const navigate = useNavigate();

  const getRecommendations = (): Recommendation[] => {
    const setorRecs = recommendations[setor] || recommendations["default"];
    return setorRecs[desafio] || setorRecs["default"] || recommendations["default"]["default"];
  };

  const recs = getRecommendations();
  
  // Selecionar artigos relevantes baseado no setor e desafio
  const getRelatedPosts = () => {
    const tagMapping: Record<string, string[]> = {
      "Expansão de patrimônio": ["Patrimônio", "Estratégia", "Governança"],
      "Aquisição estratégica": ["Due Diligence", "Checklist", "Riscos"],
      "Formação de fundo de ativos distressed": ["Estratégia", "Governança", "ROI"],
      "Modernização de parque industrial": ["CAPEX", "Modernização", "Equipamentos", "ROI"],
      "Otimização de CAPEX com ativos produtivos": ["CAPEX", "Modernização", "Equipamentos"],
      "Formação de patrimônio imobiliário empresarial": ["Patrimônio", "Estratégia", "Governança"],
    };
    
    const relevantTags = tagMapping[desafio] || ["Estratégia", "Governança"];
    
    // Ordenar por relevância (quantas tags coincidem) e depois por data
    const scoredPosts = posts.map(post => ({
      post,
      score: post.tags.filter(tag => relevantTags.includes(tag)).length,
      date: new Date(post.date).getTime()
    }));
    
    return scoredPosts
      .sort((a, b) => b.score - a.score || b.date - a.date)
      .slice(0, 3)
      .map(item => item.post);
  };
  
  const relatedPosts = getRelatedPosts();

  return (
    <>
      {/* Results Header */}
      <section className="py-12 bg-gradient-to-b from-surface-light to-surface-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-surface-black text-center md:text-left">
                Você selecionou <span className="text-accent-blue">{setor}</span> como seu setor e{" "}
                <span className="text-accent-blue">{desafio}</span> como sua necessidade de negócios.
              </h2>
              <Button
                variant="outline"
                onClick={onReset}
                className="border-accent-red text-accent-red hover:bg-accent-red hover:text-surface-white whitespace-nowrap font-semibold px-8"
              >
                REINICIAR
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-12 bg-surface-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-surface-black mb-10">
              Recomendado para você
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {recs.map((rec, idx) => (
                <Card 
                  key={idx} 
                  className="border-2 border-surface-light hover:border-accent-gold hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white"
                  onClick={() => navigate(rec.link)}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-surface-black group-hover:text-accent-blue transition-colors">
                      {rec.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-surface-dark leading-relaxed text-base">
                      {rec.description}
                    </CardDescription>
                    <div className="flex items-center text-accent-red font-semibold group-hover:translate-x-2 transition-transform">
                      Leia mais <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-surface-black mb-10">
              Artigos relacionados
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Card 
                  key={post.slug}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white border-2 border-surface-light hover:border-accent-gold"
                  onClick={() => navigate(`/insights/${post.slug}`)}
                >
                  {post.coverImage && (
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="text-sm text-accent-blue font-bold mb-2 uppercase tracking-wide">
                      {post.tags[0]}
                    </div>
                    <CardTitle className="text-xl font-bold text-surface-black line-clamp-2 group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 text-base leading-relaxed mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-surface-medium">
                      <span>{post.date}</span>
                      <span className="font-medium">{post.readingMinutes} min</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};