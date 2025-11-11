import { useState } from "react";
import { Button } from "@/components/ui/button";
import seniorGlassesImage from "@/assets/senior-glasses.jpg";

const allSectors = [
  "Manufatura e Serviços Avançados",
  "Produtos de consumo",
  "Petróleo e gás",
  "Aeroespacial e Defesa",
  "Energia e Recursos Naturais",
  "Papel e embalagens",
  "Agronegócio",
  "Serviços financeiros",
  "Capital Privado",
  "Automotivo",
  "Saúde e Ciências da Vida",
  "Varejo",
  "Aviação",
  "Máquinas e equipamentos",
  "Impacto social",
  "Produtos químicos",
  "Mídia e Entretenimento",
  "Tecnologia",
  "Construção e Infraestrutura",
  "Mineração",
  "Telecomunicações"
];

const questions = [
  {
    id: 1,
    question: "Qual é o seu setor de atividade?",
    total: 2,
    initialOptions: [
      "Varejo",
      "Capital Privado",
      "Manufatura e Serviços Avançados",
      "Tecnologia",
      "Petróleo e gás",
      "Saúde e Ciências da Vida",
      "Produtos químicos",
      "Produtos de consumo",
      "Mineração",
      "Serviços financeiros"
    ],
    allOptions: allSectors
  },
  {
    id: 2,
    question: "Qual é o seu principal desafio?",
    total: 2,
    initialOptions: [
      "Expansão de patrimônio",
      "Aquisição estratégica",
      "Redução de custos",
      "Diversificação de ativos",
      "Crescimento acelerado"
    ],
    allOptions: [
      "Expansão de patrimônio",
      "Aquisição estratégica",
      "Redução de custos",
      "Diversificação de ativos",
      "Crescimento acelerado",
      "Otimização de portfólio",
      "Sucessão patrimonial",
      "Blindagem jurídica"
    ]
  }
];

interface QuizSectionProps {
  onComplete: (setor: string, desafio: string) => void;
}

export const QuizSection = ({ onComplete }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showAllOptions, setShowAllOptions] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setShowAllOptions(false); // Reset ao mudar de pergunta
      }, 300);
    } else {
      // Quiz completo, chamar callback
      setTimeout(() => {
        onComplete(newAnswers[0], newAnswers[1]);
      }, 300);
    }
  };

  const toggleShowAll = () => {
    setShowAllOptions(!showAllOptions);
  };

  const currentOptions = showAllOptions 
    ? questions[currentQuestion].allOptions 
    : questions[currentQuestion].initialOptions;

  return (
    <section className="py-20 bg-surface-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-surface-black font-inter">
                Enxergamos além do óbvio para alcançar o extraordinário.
              </h2>
              <p className="text-lg text-surface-dark">
                Responda a duas perguntas e deixe nossa criatividade trabalhar em seus desafios.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-surface-black">
                  {currentQuestion + 1}. {questions[currentQuestion].question}
                </span>
                <span className="text-sm text-surface-medium">
                  Pergunta {currentQuestion + 1} de {questions[currentQuestion].total}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {currentOptions.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-200 ${
                      selectedOption === option
                        ? "border-accent-gold bg-accent-gold text-surface-black"
                        : "border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-surface-black"
                    }`}
                  >
                    {option}
                  </button>
                ))}
                
                {/* Botão Ver tudo / Ver menos */}
                {questions[currentQuestion].allOptions.length > questions[currentQuestion].initialOptions.length && (
                  <button
                    onClick={toggleShowAll}
                    className="px-6 py-3 rounded-full border-2 border-surface-black text-surface-black hover:bg-surface-black hover:text-surface-white font-medium transition-all duration-200 underline"
                  >
                    {showAllOptions ? "Ver menos" : "Ver tudo"}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={seniorGlassesImage}
                alt="Profissional LFCOM"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
