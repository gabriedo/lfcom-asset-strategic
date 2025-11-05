import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, TrendingUp, Award, CheckCircle2, Users } from "lucide-react";

const ConsultoriaLeiloes = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Target,
      title: "Identificação de Oportunidades",
      description: "Mapeamento contínuo de leilões alinhados à sua tese de investimento e perfil de risco-retorno.",
      features: [
        "Análise de 1.000+ leilões mensais",
        "Filtros personalizados por setor e valor",
        "Alertas em tempo real de oportunidades",
        "Relatórios executivos semanais"
      ]
    },
    {
      icon: Lightbulb,
      title: "Estratégia de Aquisição",
      description: "Desenvolvimento de plano detalhado desde análise prévia até execução e fechamento da operação.",
      features: [
        "Modelagem financeira avançada",
        "Estrutura jurídica otimizada",
        "Estratégia competitiva de lance",
        "Plano de reestruturação"
      ]
    },
    {
      icon: TrendingUp,
      title: "Maximização de Valor",
      description: "Consultoria pós-aquisição para implementar melhorias operacionais e acelerar retorno sobre investimento.",
      features: [
        "Quick wins operacionais",
        "Otimização de capital de giro",
        "Estratégia de crescimento",
        "Preparação para exit"
      ]
    }
  ];

  const expertise = [
    {
      area: "Manufatura & Indústria",
      cases: "87 aquisições",
      roi: "425% ROI médio"
    },
    {
      area: "Tecnologia & Serviços",
      cases: "64 aquisições",
      roi: "380% ROI médio"
    },
    {
      area: "Varejo & Consumo",
      cases: "52 aquisições",
      roi: "340% ROI médio"
    },
    {
      area: "Agronegócio",
      cases: "41 aquisições",
      roi: "395% ROI médio"
    }
  ];

  const diferentials = [
    "20+ anos de experiência em M&A e reestruturação empresarial",
    "Rede exclusiva de relacionamentos com administradores judiciais",
    "Base de dados proprietária com histórico de 10.000+ leilões",
    "Equipe multidisciplinar: advogados, engenheiros, contadores e operadores",
    "Taxa de sucesso de 94% em aquisições executadas",
    "Acompanhamento integral do processo até conclusão"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent-blue via-accent-blue/90 to-accent-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
              <span className="text-white font-semibold">Consultoria Especializada</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Decisões Informadas. <span className="text-accent-gold">Resultados Extraordinários.</span>
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-95">
              Transformamos complexidade em clareza estratégica. Nossa consultoria especializada garante que você 
              identifique, avalie e adquira os melhores ativos em leilão com máxima segurança e retorno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-accent-gold text-surface-black hover:bg-accent-gold/90 font-semibold text-lg px-8"
                onClick={() => navigate("/contato")}
              >
                Solicitar Proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-accent-blue font-semibold text-lg px-8"
                onClick={() => navigate("/resultados")}
              >
                Ver Resultados
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-surface-black mb-4">
                Serviços de Consultoria
              </h2>
              <p className="text-xl text-surface-dark max-w-3xl mx-auto">
                Acompanhamento integral em todas as etapas do processo de aquisição
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="border-2 border-surface-light hover:border-accent-gold transition-all duration-300 hover:shadow-2xl group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                      <service.icon className="h-8 w-8 text-accent-blue" />
                    </div>
                    <CardTitle className="text-2xl text-surface-black group-hover:text-accent-blue transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-3 pt-4 border-t border-surface-light">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-surface-dark">{feature}</span>
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

      {/* Expertise Section */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-surface-black mb-4">
                Experiência Setorial Comprovada
              </h2>
              <p className="text-xl text-surface-dark">
                Histórico de sucesso em aquisições nos principais setores da economia
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, idx) => (
                <Card key={idx} className="bg-white border-2 border-white hover:border-accent-blue transition-all duration-300 hover:shadow-xl text-center group">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-gold/20 transition-colors">
                      <Award className="h-6 w-6 text-accent-gold" />
                    </div>
                    <CardTitle className="text-xl text-surface-black group-hover:text-accent-blue transition-colors">
                      {item.area}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-3xl font-bold text-accent-blue">{item.cases}</div>
                    <div className="text-sm text-surface-medium">executadas com sucesso</div>
                    <div className="pt-3 mt-3 border-t border-surface-light">
                      <div className="text-lg font-bold text-accent-red">{item.roi}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-surface-black mb-4">
                Por que Escolher a LFCOM?
              </h2>
              <p className="text-xl text-surface-dark">
                Diferenciais que nos tornam referência em consultoria para leilões empresariais
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {diferentials.map((diff, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-surface-light rounded-xl hover:bg-accent-gold/5 transition-colors group">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-5 w-5 text-surface-black" />
                  </div>
                  <p className="text-base text-surface-dark leading-relaxed pt-1">
                    {diff}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent-blue overflow-hidden">
              <div className="bg-gradient-to-r from-accent-blue to-accent-blue/80 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-12 w-12" />
                  <div>
                    <h3 className="text-3xl font-bold">Equipe Multidisciplinar</h3>
                    <p className="text-lg opacity-90">Especialistas trabalhando para você</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-surface-dark leading-relaxed">
                  Nossa equipe reúne profissionais com vasta experiência em fusões e aquisições, reestruturação 
                  empresarial, direito empresarial e recuperação de ativos. Cada projeto conta com um time dedicado 
                  que combina expertise técnica com profundo conhecimento de mercado.
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-surface-light rounded-lg">
                    <div className="text-3xl font-bold text-accent-blue">50+</div>
                    <div className="text-sm text-surface-medium mt-1">Profissionais</div>
                  </div>
                  <div className="text-center p-4 bg-surface-light rounded-lg">
                    <div className="text-3xl font-bold text-accent-blue">20+</div>
                    <div className="text-sm text-surface-medium mt-1">Anos de Experiência</div>
                  </div>
                  <div className="text-center p-4 bg-surface-light rounded-lg">
                    <div className="text-3xl font-bold text-accent-blue">R$ 2B+</div>
                    <div className="text-sm text-surface-medium mt-1">em Transações</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-surface-black via-surface-dark to-surface-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Vamos Construir Sua Próxima <span className="text-accent-gold">Grande Aquisição</span>
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              Solicite uma proposta personalizada e descubra como nossa consultoria pode acelerar seus resultados em aquisições via leilão.
            </p>
            <Button 
              size="lg" 
              className="bg-accent-gold text-surface-black hover:bg-accent-gold/90 font-bold text-lg px-12"
              onClick={() => navigate("/contato")}
            >
              Solicitar Proposta Comercial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultoriaLeiloes;
