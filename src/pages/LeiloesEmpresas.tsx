import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield, Users, FileCheck, Target } from "lucide-react";

const LeiloesEmpresas = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: TrendingUp,
      title: "Valorização Exponencial",
      description: "Aquisição de empresas em recuperação com potencial de valorização de 300% a 500% em 24 meses."
    },
    {
      icon: Shield,
      title: "Segurança Jurídica Total",
      description: "Due diligence completa garantindo proteção contra passivos ocultos e riscos contingenciais."
    },
    {
      icon: Users,
      title: "Acesso Exclusivo",
      description: "Rede privilegiada de oportunidades off-market e leilões restritos a investidores qualificados."
    },
    {
      icon: FileCheck,
      title: "Estruturação Completa",
      description: "Assessoria integral desde identificação até fechamento, incluindo financiamento e reestruturação."
    }
  ];

  const opportunities = [
    {
      title: "Indústrias em Recuperação Judicial",
      description: "Unidades produtivas com capacidade instalada preservada, contratos mantidos e equipe técnica experiente.",
      value: "R$ 5M - R$ 50M",
      roi: "400% em 18 meses"
    },
    {
      title: "Empresas de Tecnologia",
      description: "Startups e scale-ups com produto validado, base de clientes ativa e propriedade intelectual protegida.",
      value: "R$ 2M - R$ 20M",
      roi: "350% em 24 meses"
    },
    {
      title: "Redes de Varejo",
      description: "Cadeias comerciais com pontos estratégicos, marca consolidada e operação estruturada para turn-around.",
      value: "R$ 10M - R$ 100M",
      roi: "300% em 36 meses"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Mapeamento Estratégico",
      description: "Identificamos oportunidades alinhadas ao seu perfil de investimento e tese de valor."
    },
    {
      step: "02",
      title: "Due Diligence 360°",
      description: "Análise técnica, jurídica, financeira e operacional detalhada com equipe multidisciplinar."
    },
    {
      step: "03",
      title: "Estruturação da Oferta",
      description: "Modelagem financeira, estratégia de lance e estrutura jurídica otimizada para aprovação."
    },
    {
      step: "04",
      title: "Execução e Fechamento",
      description: "Representação no leilão, negociação com credores e conclusão da aquisição."
    },
    {
      step: "05",
      title: "Gestão Pós-Aquisição",
      description: "Implementação de plano de reestruturação e maximização de valor do ativo."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-surface-black via-surface-dark to-surface-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-accent-gold/20 backdrop-blur-sm border border-accent-gold rounded-full">
              <span className="text-accent-gold font-semibold">Leilões Empresariais</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transforme Oportunidades em <span className="text-accent-gold">Patrimônio de Alto Valor</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Acesso exclusivo a aquisições empresariais estratégicas através de leilões judiciais e extrajudiciais. 
              Descontos de até 70% do valor de mercado com potencial de retorno extraordinário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-accent-gold text-surface-black hover:bg-accent-gold/90 font-semibold text-lg px-8"
                onClick={() => navigate("/contato")}
              >
                Agendar Consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-surface-black font-semibold text-lg px-8"
                onClick={() => navigate("/insights")}
              >
                Ver Estudos de Caso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-surface-black mb-4">
                Por que Investir em Leilões Empresariais?
              </h2>
              <p className="text-xl text-surface-dark max-w-3xl mx-auto">
                Vantagens exclusivas que transformam complexidade em oportunidade de valor excepcional
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="border-2 border-surface-light hover:border-accent-gold transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="w-14 h-14 bg-accent-gold/10 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-accent-gold" />
                    </div>
                    <CardTitle className="text-xl text-surface-black">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-surface-black mb-4">
                Oportunidades em Destaque
              </h2>
              <p className="text-xl text-surface-dark">
                Portfólio curado de aquisições de alto potencial disponíveis agora
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {opportunities.map((opp, idx) => (
                <Card key={idx} className="border-2 border-white hover:border-accent-blue transition-all duration-300 hover:shadow-2xl group bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <Building2 className="h-10 w-10 text-accent-blue" />
                      <span className="text-sm font-bold text-accent-red px-3 py-1 bg-accent-red/10 rounded-full">
                        {opp.roi}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-surface-black group-hover:text-accent-blue transition-colors">
                      {opp.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-base leading-relaxed text-surface-dark">
                      {opp.description}
                    </CardDescription>
                    <div className="pt-4 border-t border-surface-light">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-surface-medium font-medium">Faixa de Valor</span>
                        <span className="text-lg font-bold text-surface-black">{opp.value}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white"
                      onClick={() => navigate("/contato")}
                    >
                      Solicitar Detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-surface-black mb-4">
                Nossa Metodologia Comprovada
              </h2>
              <p className="text-xl text-surface-dark max-w-3xl mx-auto">
                Processo estruturado de 5 etapas para maximizar sucesso e minimizar riscos
              </p>
            </div>
            <div className="space-y-6">
              {process.map((item, idx) => (
                <Card key={idx} className="border-l-4 border-l-accent-gold hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-accent-gold rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-surface-black">{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-surface-black mb-3 group-hover:text-accent-blue transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-lg text-surface-dark leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <Target className="hidden md:block h-8 w-8 text-accent-gold/30 group-hover:text-accent-gold transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-blue via-accent-blue/90 to-accent-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Pronto para Sua Próxima Aquisição Estratégica?
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              Agende uma consultoria gratuita e descubra oportunidades exclusivas alinhadas ao seu perfil de investimento.
            </p>
            <Button 
              size="lg" 
              className="bg-accent-gold text-surface-black hover:bg-accent-gold/90 font-bold text-lg px-12"
              onClick={() => navigate("/contato")}
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeiloesEmpresas;
