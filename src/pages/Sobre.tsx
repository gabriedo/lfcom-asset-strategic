import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Eye, Target, Award, TrendingUp, Users, Building, Handshake } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Governança",
    description: "Processos estruturados com rigor técnico e jurídico equivalente ao de aquisições tradicionais."
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Análises objetivas, relatórios detalhados e comunicação clara em todas as etapas."
  },
  {
    icon: Target,
    title: "Rigor Técnico",
    description: "Due diligence em 4 camadas: jurídica, fiscal, técnica e estratégica para cada operação."
  },
  {
    icon: Award,
    title: "Seleção & Foco",
    description: "Atendemos apenas empresários e investidores com aporte mínimo de R$ 2 milhões."
  }
];

const timeline = [
  {
    year: "2019",
    title: "Fundação da LFCOM",
    description: "Início das operações focado em assessoria jurídica para leilões de grande porte."
  },
  {
    year: "2021", 
    title: "Expansão Nacional",
    description: "Abertura de operações em SP, RJ e MG. Primeiro R$ 100M em ativos analisados."
  },
  {
    year: "2022",
    title: "Diversificação",
    description: "Entrada no segmento de máquinas e equipamentos industriais."
  },
  {
    year: "2023",
    title: "Consolidação",
    description: "Marca de R$ 500M em ativos analisados. Metodologia própria de due diligence."
  },
  {
    year: "2024",
    title: "Liderança",
    description: "Reconhecimento como referência em assessoria de leilões para grandes investidores."
  }
];

const team = [
  {
    name: "Dr. Luis Fernando",
    role: "Sócio-Fundador",
    expertise: "Direito Empresarial",
    credentials: "20+ anos em M&A e reestruturações"
  },
  {
    name: "Ana Carolina Mendes",
    role: "Diretora de Operações", 
    expertise: "Gestão de Ativos",
    credentials: "15+ anos em fundos de investimento"
  },
  {
    name: "Roberto Silva",
    role: "Head de Due Diligence",
    expertise: "Análise Técnica",
    credentials: "Engenheiro Civil, 18+ anos em avaliações"
  },
  {
    name: "Mariana Costa",
    role: "Gerente Jurídica",
    expertise: "Direito Imobiliário",
    credentials: "Especialista em regularização fundiária"
  }
];

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-surface-black text-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-hero mb-6 animate-fade-in">
                Autoridade, previsibilidade e execução.
              </h1>
              <p className="text-xl text-surface-medium mb-8 animate-slide-up leading-relaxed">
                A LFCOM nasceu para transformar ativos de leilão em patrimônio estratégico para quem pensa grande. 
                Combinamos rigor técnico, governança corporativa e experiência de mercado para entregar 
                resultados consistentes e previsíveis.
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-display mb-6">
                    Nossa Tese
                  </h2>
                  <div className="space-y-6 text-body leading-relaxed">
                    <p>
                      <strong>Leilões não são apostas.</strong> São oportunidades estruturadas para construção 
                      de patrimônio com desconto significativo e governança rigorosa.
                    </p>
                    <p>
                      Nossa metodologia transforma o que era tradicionalmente visto como "oportunismo" em 
                      <strong> estratégia patrimonial sistemática</strong>, com processes blindados 
                      juridicamente e análise técnica profunda.
                    </p>
                    <p>
                      Atendemos exclusivamente <strong>empresários e investidores sofisticados</strong> que 
                      exigem previsibilidade, controle de risco e transparência total nos processos.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Card className="border-accent-gold/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <TrendingUp className="text-accent-gold" size={24} />
                        <div>
                          <h3 className="text-title">R$ 500M+</h3>
                          <p className="text-caption text-surface-medium">em ativos analisados</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-accent-gold/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Users className="text-accent-gold" size={24} />
                        <div>
                          <h3 className="text-title">200+</h3>
                          <p className="text-caption text-surface-medium">clientes atendidos</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-accent-gold/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Building className="text-accent-gold" size={24} />
                        <div>
                          <h3 className="text-title">95%</h3>
                          <p className="text-caption text-surface-medium">taxa de sucesso</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-display text-center mb-12">
                Nossos Princípios
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {principles.map((principle, index) => (
                  <Card key={index} className="hover-lift">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center">
                        <principle.icon className="text-accent-gold" size={32} />
                      </div>
                      <CardTitle className="text-title">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-body text-foreground text-center leading-relaxed">
                        {principle.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-display text-center mb-12">
                Nossa Trajetória
              </h2>
              
              <div className="space-y-8">
                {timeline.map((milestone, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center">
                        <span className="text-surface-black font-bold text-sm">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-title mb-2">{milestone.title}</h3>
                      <p className="text-body text-surface-medium leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-display text-center mb-12">
                Equipe Sênior
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="hover-lift">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 w-20 h-20 bg-surface-medium rounded-full flex items-center justify-center">
                        <Handshake className="text-surface-white" size={32} />
                      </div>
                      <CardTitle className="text-title">{member.name}</CardTitle>
                      <CardDescription className="text-accent-gold font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body font-medium mb-2">{member.expertise}</p>
                      <p className="text-caption text-surface-medium">
                        {member.credentials}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button asChild size="lg">
                  <Link to="/contato">
                    Fale com a direção
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-surface-black text-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-display mb-6">
                LFCOM: assessoria de leilões para quem exige resultado.
              </h2>
              <p className="text-xl text-surface-medium mb-8 leading-relaxed">
                Pronto para transformar oportunidades de leilão em patrimônio estratégico? 
                Nossa equipe está preparada para estruturar sua próxima operação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contato">
                    Agendar conversa estratégica
                  </Link>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <Link to="/solucoes">
                    Conhecer soluções
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;