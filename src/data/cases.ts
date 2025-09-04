export interface Case {
  id: string;
  title: string;
  type: "imovel" | "galpao" | "fabrica" | "maquina";
  discountPercent: number;
  thesis: "renda" | "valor" | "trading" | "uso-proprio" | "capex-otimizado" | "sede-propria" | "expansao";
  prazo: string;
  resultado: string;
  highlights: string[];
  coverImage?: string;
}

export const cases: Case[] = [
  {
    id: "1",
    title: "Galpão Logístico - Grande SP",
    type: "galpao", 
    discountPercent: 42,
    thesis: "renda",
    prazo: "90 dias",
    resultado: "Cap rate 11,2% a.a.",
    highlights: [
      "22.000 m² em condomínio logístico premium",
      "Localização estratégica no corredor Anhanguera",
      "Inquilino multinacional com contrato de 10 anos",
      "Certificação LEED e sistemas automatizados"
    ]
  },
  {
    id: "2", 
    title: "Sede Corporativa - Rio de Janeiro",
    type: "imovel",
    discountPercent: 37,
    thesis: "sede-propria", 
    prazo: "120 dias",
    resultado: "ROI 28% - Economia R$ 180k/mês",
    highlights: [
      "Edifício corporativo 3.500 m² em Botafogo",
      "Eliminação de aluguel de R$ 180 mil mensais",
      "Infraestrutura completa e moderna",
      "Valorização estimada de 8% a.a."
    ]
  },
  {
    id: "3",
    title: "Linha Industrial Têxtil",
    type: "maquina", 
    discountPercent: 55,
    thesis: "capex-otimizado",
    prazo: "60 dias", 
    resultado: "Payback < 12 meses",
    highlights: [
      "Equipamentos Sulzer de última geração",
      "Capacidade produtiva de 2.000 ton/mês",
      "Tecnologia europeia com 3 anos de uso",
      "Aumento de 45% na capacidade instalada"
    ]
  },
  {
    id: "4",
    title: "Complexo Industrial - MG", 
    type: "fabrica",
    discountPercent: 48,
    thesis: "expansao",
    prazo: "150 dias",
    resultado: "Consolidação regional",
    highlights: [
      "Planta de 15.000 m² com licenças ambientais",
      "Localização estratégica no Triângulo Mineiro", 
      "Infraestrutura para 300 funcionários",
      "Potencial de duplicação da operação"
    ]
  },
  {
    id: "5",
    title: "Centro de Distribuição - SP",
    type: "galpao",
    discountPercent: 35,
    thesis: "renda",
    prazo: "75 dias", 
    resultado: "Cap rate 9,8% a.a.",
    highlights: [
      "28.000 m² em Guarulhos próximo ao aeroporto",
      "Docking para 40 carretas simultâneas",
      "Sistema WMS implementado", 
      "Contrato built-to-suit com varejista"
    ]
  },
  {
    id: "6",
    title: "Equipamentos Rodoviários",
    type: "maquina",
    discountPercent: 62, 
    thesis: "capex-otimizado",
    prazo: "45 dias",
    resultado: "Fleet renovation completa",
    highlights: [
      "Frota de 12 caminhões Mercedes seminovos",
      "Idade média de 2,5 anos com baixa quilometragem", 
      "Revisões em concessionária comprovadas",
      "Financiamento próprio eliminou necessidade de CDC"
    ]
  }
];

export const getCasesByType = (type: string): Case[] => {
  if (type === "todos") return cases;
  return cases.filter(case_ => case_.type === type);
};

export const getCasesByThesis = (thesis: string): Case[] => {
  if (thesis === "todas") return cases;
  return cases.filter(case_ => case_.thesis === thesis);
};

export const getTypeLabel = (type: string): string => {
  const labels = {
    "imovel": "Imóvel",
    "galpao": "Galpão", 
    "fabrica": "Fábrica",
    "maquina": "Máquina"
  };
  return labels[type as keyof typeof labels] || type;
};

export const getThesisLabel = (thesis: string): string => {
  const labels = {
    "renda": "Renda",
    "valor": "Valorização",
    "trading": "Trading", 
    "uso-proprio": "Uso Próprio",
    "capex-otimizado": "CAPEX Otimizado",
    "sede-propria": "Sede Própria",
    "expansao": "Expansão"
  };
  return labels[thesis as keyof typeof labels] || thesis;
};