import { Search, FileCheck, Target, Key } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Mapeamento de Oportunidades",
    points: [
      "Análise de editais e processos",
      "Identificação de ativos estratégicos",
      "Avaliação preliminar de potencial"
    ]
  },
  {
    icon: FileCheck,
    title: "Due Diligence Completa",
    points: [
      "Análise jurídica e fiscal detalhada",
      "Vistoria técnica especializada",
      "Validação de documentação"
    ]
  },
  {
    icon: Target,
    title: "Estratégia & Lance",
    points: [
      "Definição de teto estratégico",
      "Planejamento de participação",
      "Execução do lance otimizado"
    ]
  },
  {
    icon: Key,
    title: "Pós-aquisição",
    points: [
      "Imissão na posse do bem",
      "Regularização documental",
      "Suporte para liquidez"
    ]
  }
];

export const HowWeWorkSection = () => {
  return (
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-display text-surface-black">
            Como Atuamos
          </h2>
          <p className="text-xl text-surface-medium max-w-2xl mx-auto">
            Processo estruturado e rigoroso para maximizar segurança e resultado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-surface-white p-6 rounded-2xl shadow-sm hover-lift space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-surface-black rounded-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-surface-white" />
                </div>
                <span className="text-caption text-surface-medium font-semibold">
                  0{index + 1}
                </span>
              </div>
              
              <h3 className="text-title text-surface-black">
                {step.title}
              </h3>
              
              <ul className="space-y-2">
                {step.points.map((point, pointIndex) => (
                  <li 
                    key={pointIndex}
                    className="text-body text-surface-medium flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};