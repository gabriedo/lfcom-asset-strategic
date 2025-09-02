export interface Case {
  id: string;
  title: string;
  type: "imovel" | "galpao" | "fabrica" | "maquina";
  discountPercent: number;
  thesis: "renda" | "valor" | "trading" | "uso-proprio";
  prazo: string;
  resultado: string;
  highlights: string[];
  coverImage?: string;
}

export const cases: Case[] = [
  {
    id: "1",
    title: "Galpão Logístico SP",
    type: "galpao",
    discountPercent: 42,
    thesis: "renda",
    prazo: "90 dias",
    resultado: "Cap rate 11,2% a.a.",
    highlights: [
      "Localização estratégica próxima a rodovias",
      "Tenant grade A já instalado",
      "Contrato de locação de 5 anos"
    ]
  },
  {
    id: "2", 
    title: "Planta Industrial MG",
    type: "fabrica",
    discountPercent: 55,
    thesis: "valor",
    prazo: "180 dias",
    resultado: "Valorização 38% em 18 meses",
    highlights: [
      "Modernização e adequação ambiental",
      "Venda para grupo multinacional",
      "ROI 45% no período"
    ]
  },
  {
    id: "3",
    title: "Linha CNC Completa",
    type: "maquina", 
    discountPercent: 63,
    thesis: "uso-proprio",
    prazo: "45 dias",
    resultado: "Payback 2,1 anos",
    highlights: [
      "Equipamentos Alemães de alta precisão",
      "Aumento de 40% na capacidade produtiva",
      "Redução 25% no tempo de processo"
    ]
  },
  {
    id: "4",
    title: "Edifício Comercial RJ",
    type: "imovel",
    discountPercent: 35,
    thesis: "renda",
    prazo: "120 dias", 
    resultado: "Yield 9,8% a.a.",
    highlights: [
      "Centro empresarial consolidado",
      "Taxa de ocupação 95%",
      "Contratos indexados ao IGPM"
    ]
  },
  {
    id: "5",
    title: "Centro de Distribuição RS",
    type: "galpao",
    discountPercent: 48,
    thesis: "trading",
    prazo: "60 dias",
    resultado: "Lucro 28% em 10 meses",
    highlights: [
      "Localização premium para e-commerce",
      "Venda para operador logístico",
      "Estrutura class A conservada"
    ]
  },
  {
    id: "6",
    title: "Equipamentos Têxteis",
    type: "maquina",
    discountPercent: 58,
    thesis: "uso-proprio", 
    prazo: "30 dias",
    resultado: "Economia 70% vs. novos",
    highlights: [
      "Maquinário europeu recente",
      "Implementação em linha existente",
      "Aumento 60% na produção"
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
    "uso-proprio": "Uso Próprio"
  };
  return labels[thesis as keyof typeof labels] || thesis;
};