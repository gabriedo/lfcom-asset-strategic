import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lightbulb, FileCheck, Calendar, CheckCircle } from "lucide-react";
import { posts } from "@/data/posts";

const ConsultoriaLeiloes = () => {
  const relevantPosts = posts.filter(post => 
    post.tags.some(tag => ["Due Diligence", "Governança", "Metodologia"].includes(tag))
  );

  const methodology = [
    {
      icon: Shield,
      title: "Due Diligence em 4 Camadas",
      description: "Protocolo proprietário que analisa aspectos jurídicos, fiscais, técnicos e estratégicos. Desenvolvido ao longo de R$ 500M+ em ativos analisados.",
      frameworks: ["Análise jurídica profunda", "Levantamento fiscal completo", "Vistoria técnica presencial", "Modelagem financeira"]
    },
    {
      icon: Lightbulb,
      title: "Estratégia de Lance Calibrada",
      description: "Metodologia quantitativa para definição de preço-limite fundamentado. Combina análise comparativa, fluxo de caixa e gestão de risco.",
      frameworks: ["Análise de múltiplos", "Sensibilidade de cenários", "Matriz risco-retorno", "Teto de lance otimizado"]
    },
    {
      icon: FileCheck,
      title: "Execução e Governança",
      description: "Representação técnica no leilão e gestão pós-aquisição. Garantia de compliance e maximização de valor do ativo adquirido.",
      frameworks: ["Representação no leilão", "Negociação com credores", "Regularização documental", "Plano de reestruturação"]
    }
  ];

  const stats = [
    { value: "94%", label: "Taxa de sucesso em aquisições" },
    { value: "R$ 500M+", label: "Em ativos analisados" },
    { value: "425%", label: "ROI médio em 24 meses" },
    { value: "20+ anos", label: "De experiência em M&A" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-surface-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-accent-blue/10 border border-accent-blue/30 rounded-full">
                <span className="text-accent-blue text-sm font-medium tracking-wide">METODOLOGIA</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight">
                Due diligence <br/>que transforma <br/><span className="font-semibold text-accent-gold">risco em clareza</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl font-light">
                Protocolo proprietário de análise técnica desenvolvido para decisões 
                de alto impacto em aquisições via leilão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <div className="text-5xl font-light text-accent-blue">{stat.value}</div>
                  <div className="text-sm text-surface-medium font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-light text-surface-black mb-6">
                Metodologia de análise estruturada
              </h2>
              <p className="text-lg text-surface-medium font-light leading-relaxed">
                Desenvolvida ao longo de centenas de operações, nossa abordagem combina 
                rigor técnico com clareza estratégica para decisões de alto impacto.
              </p>
            </div>
            
            <div className="space-y-8">
              {methodology.map((item, idx) => (
                <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-[auto,1fr] gap-8">
                      <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="w-14 h-14 bg-accent-blue/5 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-7 w-7 text-accent-blue" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h3 className="text-2xl font-medium text-surface-black">
                            {item.title}
                          </h3>
                          <p className="text-base text-surface-medium font-light leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3 pt-4">
                          {item.frameworks.map((framework, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                              <span className="text-sm text-surface-dark font-light">{framework}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
                  Análises aprofundadas
                </h2>
                <p className="text-lg text-surface-medium font-light">
                  Metodologias e frameworks detalhados
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
                Quer entender nossa <br/><span className="font-medium">metodologia completa?</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Converse com especialistas que estruturam análises de alto rigor para empresários.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-accent-gold text-surface-black hover:bg-accent-gold/90 font-medium text-base px-8"
              >
                <Link to="/contato">
                  Agendar análise técnica
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 font-medium text-base px-8"
              >
                <Link to="/insights">
                  Ler metodologia completa
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

export default ConsultoriaLeiloes;
