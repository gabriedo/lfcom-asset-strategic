import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { cases, getTypeLabel, getThesisLabel } from "@/data/cases";
import caseFactory from "@/assets/case-factory.jpg";

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseData = cases.find(c => c.id === id);

  if (!caseData) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Case não encontrado</h1>
            <Button asChild>
              <Link to="/">Voltar para home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Image */}
        <section className="relative h-[60vh] bg-surface-black">
          <img
            src={caseFactory}
            alt={caseData.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-black via-surface-black/50 to-transparent" />
        </section>

        {/* Content */}
        <section className="py-20 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button variant="ghost" asChild className="mb-8">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </Link>
              </Button>

              {/* Header */}
              <div className="space-y-6 mb-12">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-sm">
                    {getTypeLabel(caseData.type)}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {getThesisLabel(caseData.thesis)}
                  </Badge>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-surface-black font-inter">
                  {caseData.title}
                </h1>

                <div className="flex flex-wrap gap-6 text-surface-dark">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent-gold" />
                    <span className="font-semibold text-2xl text-accent-gold">{caseData.discountPercent}% de desconto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>Prazo: {caseData.prazo}</span>
                  </div>
                </div>
              </div>

              {/* Result Highlight */}
              <div className="bg-accent-gold/10 border-l-4 border-accent-gold p-6 rounded-r-lg mb-12">
                <p className="text-sm font-semibold text-surface-black uppercase tracking-wide mb-2">
                  Resultado
                </p>
                <p className="text-2xl font-bold text-surface-black">
                  {caseData.resultado}
                </p>
              </div>

              {/* Case Story */}
              <div className="prose prose-lg max-w-none mb-12 space-y-6">
                <h2 className="text-3xl font-bold text-surface-black font-inter">O Desafio</h2>
                <p className="text-lg text-surface-dark leading-relaxed">
                  Uma indústria de médio porte no setor de manufatura enfrentava a necessidade urgente de expandir sua capacidade produtiva. O investimento em máquinas novas representaria um CAPEX de mais de R$ 5 milhões, com impacto significativo no fluxo de caixa e prazos de entrega que ultrapassariam 18 meses.
                </p>

                <h2 className="text-3xl font-bold text-surface-black font-inter mt-12">Nossa Abordagem</h2>
                <p className="text-lg text-surface-dark leading-relaxed">
                  A LFCOM identificou uma oportunidade única em leilões judiciais: uma linha completa de equipamentos industriais de alta performance, com apenas 3 anos de uso e manutenção rigorosa documentada. Realizamos due diligence técnica completa, incluindo inspeção presencial e análise de histórico operacional.
                </p>
                <p className="text-lg text-surface-dark leading-relaxed">
                  Nossa estratégia de aquisição focou em minimizar riscos enquanto maximizava o desconto. Coordenamos toda a parte jurídica, logística de desmontagem e transporte, e reinstalação nas instalações do cliente.
                </p>

                <h2 className="text-3xl font-bold text-surface-black font-inter mt-12">O Resultado</h2>
                <p className="text-lg text-surface-dark leading-relaxed">
                  A aquisição foi concluída em apenas 60 dias, com economia de 55% em relação ao valor de mercado de equipamentos novos. O cliente investiu R$ 2,2 milhões em vez dos R$ 5 milhões projetados, liberando capital para outras iniciativas estratégicas.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="bg-surface-light p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold text-surface-black mb-6">Destaques do Projeto</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                      <span className="text-surface-dark">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-surface-white border-2 border-accent-gold rounded-xl">
                  <div className="text-4xl font-bold text-accent-gold mb-2">
                    {caseData.discountPercent}%
                  </div>
                  <div className="text-sm text-surface-dark">Economia vs. mercado</div>
                </div>
                <div className="text-center p-6 bg-surface-white border-2 border-accent-gold rounded-xl">
                  <div className="text-4xl font-bold text-accent-gold mb-2">
                    {caseData.prazo}
                  </div>
                  <div className="text-sm text-surface-dark">Prazo total</div>
                </div>
                <div className="text-center p-6 bg-surface-white border-2 border-accent-gold rounded-xl">
                  <div className="text-4xl font-bold text-accent-gold mb-2">
                    &lt;1 ano
                  </div>
                  <div className="text-sm text-surface-dark">Payback</div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-surface-black text-surface-white p-8 lg:p-12 rounded-2xl text-center">
                <h2 className="text-3xl font-bold mb-4">Quer resultados similares?</h2>
                <p className="text-lg text-surface-medium mb-8 max-w-2xl mx-auto">
                  Nossa equipe está pronta para analisar suas necessidades específicas e identificar as melhores oportunidades no mercado.
                </p>
                <Button asChild variant="hero" size="lg">
                  <Link to="/contato">
                    Falar com especialista
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

export default CaseDetail;
