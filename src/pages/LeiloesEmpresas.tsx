import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, Building2, Calendar } from "lucide-react";
import { posts } from "@/data/posts";

const LeiloesEmpresas = () => {
  const relevantPosts = posts.filter(post => 
    post.tags.some(tag => ["Estratégia", "Empresários", "Patrimônio", "CAPEX"].includes(tag))
  );

  const insights = [
    {
      metric: "R$ 15Bi+",
      label: "Volume anual de leilões no Brasil",
      description: "Mercado em expansão constante"
    },
    {
      metric: "30-60%",
      label: "Desconto médio estrutural",
      description: "Abaixo do valor de avaliação"
    },
    {
      metric: "425%",
      label: "ROI médio em 24 meses",
      description: "Com due diligence adequada"
    }
  ];

  const keyThemes = [
    {
      icon: TrendingUp,
      title: "Otimização de CAPEX",
      description: "Expansão operacional com investimento 40-60% menor que alternativas tradicionais. Análise de como grandes empresários utilizam leilões para modernização sem comprometer capital de giro."
    },
    {
      icon: BarChart3,
      title: "Diversificação Patrimonial",
      description: "Formação de portfólio de ativos tangíveis com desconto estrutural. Estratégias de proteção contra volatilidade através de aquisições judiciais e extrajudiciais."
    },
    {
      icon: Building2,
      title: "Consolidação Estratégica",
      description: "Aquisição de concorrentes em recuperação judicial. Como transformar crise setorial em oportunidade de consolidação e ganho de market share."
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
              <div className="inline-block px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full">
                <span className="text-accent-gold text-sm font-medium tracking-wide">ANÁLISE ESTRATÉGICA</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight">
                Por que grandes <br/>empresários olham <br/>para <span className="font-semibold text-accent-gold">leilões</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl font-light">
                Inteligência de mercado e estratégias comprovadas para formação patrimonial 
                através de aquisições judiciais e extrajudiciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {insights.map((insight, idx) => (
                <div key={idx} className="text-center space-y-3">
                  <div className="text-5xl font-light text-accent-blue">{insight.metric}</div>
                  <div className="text-lg font-medium text-surface-black">{insight.label}</div>
                  <div className="text-sm text-surface-medium font-light">{insight.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes Section */}
      <section className="py-24 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-light text-surface-black mb-6">
                Temas estratégicos para decisores
              </h2>
              <p className="text-lg text-surface-medium font-light leading-relaxed">
                Análises fundamentadas em dados de mercado e casos reais de grandes empresários 
                que utilizam leilões como ferramenta de vantagem competitiva.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {keyThemes.map((theme, idx) => (
                <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="space-y-6 pb-6">
                    <div className="w-12 h-12 bg-accent-blue/5 rounded-lg flex items-center justify-center">
                      <theme.icon className="h-6 w-6 text-accent-blue" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-xl font-medium text-surface-black">
                      {theme.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-surface-medium font-light">
                      {theme.description}
                    </CardDescription>
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
                  Artigos relacionados
                </h2>
                <p className="text-lg text-surface-medium font-light">
                  Análises aprofundadas e casos de estudo
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

            <div className="flex md:hidden justify-center pt-4">
              <Button asChild variant="outline">
                <Link to="/insights">
                  Ver todos os artigos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
                Interessado em aprofundar <br/>sua <span className="font-medium">análise estratégica?</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Converse com especialistas que estruturam operações de alto impacto para empresários.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-accent-gold text-surface-black hover:bg-accent-gold/90 font-medium text-base px-8"
              >
                <Link to="/contato">
                  Falar com especialista
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
                  Ver casos de sucesso
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

export default LeiloesEmpresas;
