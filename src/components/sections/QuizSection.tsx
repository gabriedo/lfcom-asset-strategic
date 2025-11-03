import { useState } from "react";
import { Button } from "@/components/ui/button";
import quizPersonImage from "@/assets/quiz-person.jpg";

const questions = [
  {
    id: 1,
    question: "Qual é o seu setor de atividade?",
    total: 2,
    options: [
      "Varejo",
      "Capital Privado",
      "Manufatura e Serviços Avançados",
      "Tecnologia",
      "Petróleo e gás",
      "Saúde e Ciências da Vida",
      "Produtos químicos",
      "Produtos de consumo",
      "Mineração",
      "Serviços financeiros",
      "Ver tudo"
    ]
  },
  {
    id: 2,
    question: "Qual é o seu principal desafio?",
    total: 2,
    options: [
      "Expansão de patrimônio",
      "Aquisição estratégica",
      "Redução de custos",
      "Diversificação de ativos",
      "Crescimento acelerado",
      "Ver tudo"
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

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }, 300);
    } else {
      // Quiz completo, chamar callback
      setTimeout(() => {
        onComplete(newAnswers[0], newAnswers[1]);
      }, 300);
    }
  };

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
                {questions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-200 ${
                      selectedOption === option
                        ? "border-accent-gold bg-accent-gold text-surface-black"
                        : option === "Ver tudo"
                        ? "border-surface-black text-surface-black hover:bg-surface-black hover:text-surface-white underline"
                        : "border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-surface-black"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={quizPersonImage}
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
