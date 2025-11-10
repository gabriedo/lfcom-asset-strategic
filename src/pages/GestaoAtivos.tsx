import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Cog, TrendingUp, Target, Calendar } from "lucide-react";
import { posts } from "@/data/posts";

const GestaoAtivos = () => {
  const relevantPosts = posts.filter(post => 
    post.tags.some(tag => ["CAPEX", "Modernização", "Equipamentos", "ROI"].includes(tag))
  );

  const frameworks = [
    {
      icon: Cog,
      title: "Otimização Operacional",
      description: "Quick wins em 90 dias. Análise de processos, redução de custos e aumento de eficiência com foco em geração imediata de caixa.",
      metrics: ["30-50% redução de custos", "90 dias para implementação", "EBITDA positivo"]
    },
    {
      icon: TrendingUp,
      title: "Estratégia de Crescimento",
      description: "Roadmap estruturado para expansão orgânica e inorgânica. Desenvolvimento de produto, penetração de mercado e M&A.",
      metrics: ["3x crescimento de receita", "24 meses de execução", "Market share expandido"]
    },
    {
      icon: Target,
      title: "Preparação para Exit",
      description: "Maximização de múltiplos e estruturação de venda estratégica. Data room, identificação de compradores e negociação.",
      metrics: ["45% ROI médio", "18 meses payback", "Múltiplos premium"]
    }
  ];

  const transformationJourney = [
    {
      phase: "Diagnóstico (30d)",
      focus: "Mapeamento completo e identificação de quick wins"
    },
    {
      phase: "Estabilização (90d)",
      focus: "Implementação de melhorias e reestruturação financeira"
    },
    {
      phase: "Crescimento (180d)",
      focus: "Expansão de receitas e penetração de mercado"
    },
    {
      phase: "Exit (90d)",
      focus: "Preparação e execução de venda estratégica"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-surface-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 rounded-full">
                <span className="text-accent-red text-sm font-medium tracking-wide">TRANSFORMAÇÃO</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight">
                Como transformar <br/>máquinas em <br/><span className="font-semibold text-accent-gold">vantagem competitiva</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl font-light">
                Estratégias de modernização industrial via leilões: quando faz sentido 
                otimizar CAPEX através de aquisição de equipamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {transformationJourney.map((item, idx) => (
                <div key={idx} className="text-center space-y-3 p-6 bg-surface-light/50 rounded-lg">
                  <div className="text-sm font-medium text-accent-blue">{item.phase}</div>
                  <div className="text-sm text-surface-medium font-light leading-relaxed">{item.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-light text-surface-black mb-6">
                Quando faz sentido adquirir equipamentos em leilão
              </h2>
              <p className="text-lg text-surface-medium font-light leading-relaxed">
                Análise de viabilidade e critérios de decisão para modernização industrial 
                com otimização de CAPEX corporativo.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {frameworks.map((framework, idx) => (
                <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="space-y-6 pb-6">
                    <div className="w-12 h-12 bg-accent-blue/5 rounded-lg flex items-center justify-center">
                      <framework.icon className="h-6 w-6 text-accent-blue" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-xl font-medium text-surface-black">
                      {framework.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-base leading-relaxed text-surface-medium font-light">
                      {framework.description}
                    </CardDescription>
                    <div className="space-y-2 pt-4 border-t border-surface-light">
                      {framework.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-accent-gold rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-surface-dark font-light">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-4xl font-light text-surface-black mb-4">
                  Casos de estudo detalhados
                </h2>
                <p className="text-lg text-surface-medium font-light">
                  Análises quantitativas de ROI e transformação
                </p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex">
                <Link to="/insights">
                  Ver todos os artigos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relevantPosts.slice(0, 3).map((post) => (
                <Link key={post.id} to={`/insights/${post.slug}`}>
                  <Card className="border-none shadow-sm hover:shadow-md transition-all h-full group bg-white">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-4 text-surface-medium">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} strokeWidth={1.5} />
                          <span className="text-xs font-light">
                            {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                        <span className="text-xs font-light">{post.readingMinutes} min</span>
                      </div>
                      <CardTitle className="text-xl font-medium leading-snug group-hover:text-accent-blue transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm font-light leading-relaxed text-surface-medium line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl lg:text-5xl font-light leading-tight">
                Avaliar viabilidade para <br/>sua <span className="font-medium">operação específica?</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Analise com especialistas se modernização via leilão faz sentido para seu negócio.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-accent-gold text-surface-black hover:bg-accent-gold/90 font-medium text-base px-8"
              >
                <Link to="/contato">
                  Solicitar análise técnica
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 font-medium text-base px-8"
              >
                <Link to="/resultados">
                  Ver casos reais
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestaoAtivos;
