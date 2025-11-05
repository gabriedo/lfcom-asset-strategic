import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LineChart, Cog, DollarSign, Users, Target, Zap, BarChart3, TrendingUp } from "lucide-react";

const GestaoAtivos = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Cog,
      title: "Reestruturação Operacional",
      description: "Implementação de melhorias imediatas em processos, redução de custos e otimização de recursos para recuperação acelerada.",
      results: "30-50% redução de custos em 90 dias"
    },
    {
      icon: DollarSign,
      title: "Otimização Financeira",
      description: "Reestruturação de capital de giro, renegociação com credores e gestão de fluxo de caixa para maximizar liquidez.",
      results: "40% melhoria em EBITDA médio"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Estratégico",
      description: "Desenvolvimento e execução de plano de crescimento orgânico e inorgânico, com foco em expansão de receitas.",
      results: "3x crescimento de receita em 24 meses"
    },
    {
      icon: Users,
      title: "Gestão de Talentos",
      description: "Contratação de executivos chave, reestruturação de equipes e implementação de cultura de alta performance.",
      results: "85% retenção de talentos críticos"
    }
  ];

  const phases = [
    {
      phase: "Fase 1",
      title: "Diagnóstico Acelerado",
      duration: "30 dias",
      activities: [
        "Mapeamento completo de operações",
        "Identificação de quick wins",
        "Avaliação de equipe e cultura",
        "Plano de 90 dias detalhado"
      ]
    },
    {
      phase: "Fase 2",
      title: "Estabilização",
      duration: "90 dias",
      activities: [
        "Implementação de quick wins",
        "Reestruturação financeira",
        "Otimização de processos críticos",
        "Fortalecimento de liderança"
      ]
    },
    {
      phase: "Fase 3",
      title: "Crescimento",
      duration: "180 dias",
      activities: [
        "Expansão de canais de venda",
        "Lançamento de novos produtos",
        "Penetração em novos mercados",
        "Digitalização e automação"
      ]
    },
    {
      phase: "Fase 4",
      title: "Preparação para Exit",
      duration: "90 dias",
      activities: [
        "Otimização de múltiplos",
        "Preparação de data room",
        "Identificação de compradores",
        "Execução de venda estratégica"
      ]
    }
  ];

  const results = [
    {
      metric: "425%",
      label: "ROI Médio",
      description: "Retorno sobre investimento em 24 meses"
    },
    {
      metric: "18 meses",
      label: "Payback Médio",
      description: "Tempo para recuperação total do investimento"
    },
    {
      metric: "R$ 850M",
      label: "Valor Criado",
      description: "Valorização total em ativos gerenciados"
    },
    {
      metric: "94%",
      label: "Taxa de Sucesso",
      description: "Projetos com resultado acima da meta"
    }
  ];

  const cases = [
    {
      sector: "Indústria de Manufatura",
      challenge: "Adquirida por R$ 12M em recuperação judicial com EBITDA negativo de R$ 2M/ano",
      solution: "Reestruturação operacional, renegociação com fornecedores e otimização de produto mix",
      result: "Vendida por R$ 62M após 22 meses com EBITDA de R$ 8M/ano",
      roi: "416% ROI"
    },
    {
      sector: "E-commerce de Moda",
      challenge: "Aquisição de R$ 8M de startup em dificuldades com queima de caixa de R$ 500k/mês",
      solution: "Redução de custos fixos, pivotagem de modelo de negócio e foco em rentabilidade",
      result: "Vendida por R$ 35M após 18 meses com cashflow positivo de R$ 300k/mês",
      roi: "338% ROI"
    },
    {
      sector: "Rede de Varejo",
      challenge: "Aquisição de 12 lojas por R$ 25M com margem EBITDA de apenas 5%",
      solution: "Fechamento de lojas não rentáveis, renegociação de aluguéis e otimização de supply chain",
      result: "Vendida por R$ 95M após 30 meses com margem EBITDA de 18%",
      roi: "280% ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-surface-black via-surface-dark to-surface-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-accent-red/20 backdrop-blur-sm border border-accent-red rounded-full">
              <span className="text-accent-red font-semibold">Gestão de Ativos</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transformamos Aquisições em <span className="text-accent-gold">Histórias de Sucesso</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Gestão hands-on pós-aquisição que maximiza valor, acelera recuperação e prepara seu ativo 
              para exit estratégico com múltiplos premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-accent-gold text-surface-black hover:bg-accent-gold/90 font-semibold text-lg px-8"
                onClick={() => navigate("/contato")}
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-surface-black font-semibold text-lg px-8"
                onClick={() => navigate("/resultados")}
              >
                Ver Casos de Sucesso
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
                Nossa Abordagem de Gestão
              </h2>
              <p className="text-xl text-surface-dark max-w-3xl mx-auto">
                Metodologia comprovada para recuperação acelerada e criação de valor sustentável
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="border-2 border-surface-light hover:border-accent-gold transition-all duration-300 hover:shadow-2xl group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-accent-gold/10 rounded-xl flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                        <service.icon className="h-7 w-7 text-accent-gold" />
                      </div>
                      <Zap className="h-6 w-6 text-accent-red" />
                    </div>
                    <CardTitle className="text-2xl text-surface-black group-hover:text-accent-blue transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="pt-4 border-t border-surface-light">
                      <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-lg">
                        <span className="text-sm font-bold text-accent-blue">{service.results}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-surface-black mb-4">
                Jornada de Transformação
              </h2>
              <p className="text-xl text-surface-dark">
                Roadmap estruturado em 4 fases para maximizar valor do seu ativo
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((phase, idx) => (
                <Card key={idx} className="bg-white border-2 border-white hover:border-accent-blue transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="inline-block px-4 py-1 bg-accent-blue text-white text-sm font-bold rounded-full mb-3">
                      {phase.phase}
                    </div>
                    <CardTitle className="text-xl text-surface-black">{phase.title}</CardTitle>
                    <div className="text-sm text-accent-red font-semibold">{phase.duration}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-surface-dark">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-surface-black mb-4">
                Resultados Comprovados
              </h2>
              <p className="text-xl text-surface-dark">
                Números que demonstram nossa capacidade de criar valor excepcional
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {results.map((result, idx) => (
                <Card key={idx} className="text-center border-2 border-surface-light hover:border-accent-gold transition-all duration-300 hover:shadow-xl bg-gradient-to-b from-white to-surface-light/30">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-5xl font-bold text-accent-blue mb-2">{result.metric}</div>
                    <div className="text-lg font-bold text-surface-black mb-2">{result.label}</div>
                    <div className="text-sm text-surface-medium">{result.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-surface-black mb-4">
                Casos de Transformação
              </h2>
              <p className="text-xl text-surface-dark">
                Histórias reais de empresas que multiplicaram seu valor sob nossa gestão
              </p>
            </div>
            <div className="space-y-8">
              {cases.map((item, idx) => (
                <Card key={idx} className="border-2 border-white hover:border-accent-gold transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-accent-blue to-accent-blue/80 p-6 text-white">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-8 w-8" />
                        <h3 className="text-2xl font-bold">{item.sector}</h3>
                      </div>
                      <div className="px-6 py-2 bg-accent-gold text-surface-black rounded-full font-bold text-lg">
                        {item.roi}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-accent-red uppercase mb-2">Desafio</h4>
                      <p className="text-base text-surface-dark">{item.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-accent-blue uppercase mb-2">Nossa Solução</h4>
                      <p className="text-base text-surface-dark">{item.solution}</p>
                    </div>
                    <div className="pt-4 border-t border-surface-light">
                      <h4 className="text-sm font-bold text-accent-gold uppercase mb-2">Resultado</h4>
                      <p className="text-base text-surface-dark font-medium">{item.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-gold via-accent-gold/90 to-accent-gold text-surface-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Pronto para Maximizar o Valor do Seu Ativo?
            </h2>
            <p className="text-xl leading-relaxed">
              Nossa equipe de gestão está pronta para transformar sua aquisição em uma história de sucesso extraordinário.
            </p>
            <Button 
              size="lg" 
              className="bg-surface-black text-white hover:bg-surface-black/90 font-bold text-lg px-12"
              onClick={() => navigate("/contato")}
            >
              Agendar Reunião Estratégica
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestaoAtivos;
