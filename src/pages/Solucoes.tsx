import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Shield, Database, Users, Zap } from "lucide-react";

const empresaSolutions = [
  "Expansão com desconto estruturado",
  "Aquisição de plantas e galpões industriais",
  "Compra estratégica de máquinas e motores",
  "Consolidação logística territorial",
  "Otimização inteligente de CAPEX"
];

const investorSolutions = [
  "Compra de imóveis com desconto significativo",
  "Estratégias por tese (renda, valorização, trading)",
  "Gestão estruturada de risco e compliance",
  "Diversificação patrimonial qualificada",
  "Assessoria para alta liquidez"
];

const differentials = [
  {
    icon: Shield,
    title: "Governança",
    description: "Processos estruturados e transparentes com foco em compliance e ética empresarial"
  },
  {
    icon: Users,
    title: "Rigidez Jurídica",
    description: "Due diligence completa com validação jurídica, fiscal e técnica por especialistas"
  },
  {
    icon: Database,
    title: "Dados & Inteligência",
    description: "Análise quantitativa e qualitativa baseada em inteligência de mercado proprietária"
  },
  {
    icon: Zap,
    title: "Execução Sênior",
    description: "Equipe experiente com histórico comprovado em operações de alto valor agregado"
  }
];

const Solucoes = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-surface-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-hero text-surface-white">
                Nossas <span className="text-accent-gold">Soluções</span>
              </h1>
              <p className="text-xl text-surface-medium leading-relaxed">
                Atuamos de ponta a ponta, do mapeamento à liquidação, 
                com foco em segurança jurídica e máximo resultado
              </p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-surface-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Para Empresas */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-surface-black rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-surface-white" />
                  </div>
                  <div>
                    <h2 className="text-headline text-surface-black">Para Empresas</h2>
                    <p className="text-body text-surface-medium">Soluções CNPJ para crescimento estratégico</p>
                  </div>
                </div>
                
                <div className="bg-surface-light p-8 rounded-2xl">
                  <ul className="space-y-4">
                    {empresaSolutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-accent-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-body text-surface-black">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Para Investidores */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-surface-black rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-surface-white" />
                  </div>
                  <div>
                    <h2 className="text-headline text-surface-black">Para Investidores</h2>
                    <p className="text-body text-surface-medium">Estratégias CPF/CNPJ para patrimônio</p>
                  </div>
                </div>
                
                <div className="bg-surface-light p-8 rounded-2xl">
                  <ul className="space-y-4">
                    {investorSolutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-accent-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-body text-surface-black">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="py-20 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-display text-surface-black">
                O que nos diferencia
              </h2>
              <p className="text-xl text-surface-medium max-w-2xl mx-auto">
                Combinamos experiência, rigor técnico e inteligência de mercado 
                para entregar resultados excepcionais
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentials.map((differential, index) => (
                <div key={index} className="bg-surface-white p-8 rounded-2xl hover-lift space-y-4">
                  <div className="w-16 h-16 bg-surface-black rounded-full flex items-center justify-center">
                    <differential.icon className="w-8 h-8 text-surface-white" />
                  </div>
                  <h3 className="text-title text-surface-black">{differential.title}</h3>
                  <p className="text-body text-surface-medium leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-surface-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-display text-surface-white">
                Pronto para começar?
              </h2>
              <p className="text-xl text-surface-medium">
                Solicite uma avaliação estratégica sem compromisso
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contato">Solicitar avaliação estratégica</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solucoes;