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
    title: "Apartamento Alto Padrão - Jardins",
    type: "imovel", 
    discountPercent: 38,
    thesis: "renda",
    prazo: "75 dias",
    resultado: "Yield 8,5% a.a.",
    highlights: [
      "240 m² em edifício premium nos Jardins",
      "Vista panorâmica da cidade",
      "Acabamento Armani Casa",
      "Potencial locação executiva R$ 18k/mês"
    ]
  },
  {
    id: "2", 
    title: "Casa de Alto Padrão - Alphaville",
    type: "imovel",
    discountPercent: 45,
    thesis: "renda", 
    prazo: "90 dias",
    resultado: "ROI 22% em 24 meses",
    highlights: [
      "Casa 450 m² em condomínio fechado",
      "4 suítes + área gourmet completa",
      "Segurança 24h e clube privativo",
      "Demanda alta para locação corporativa"
    ]
  },
  {
    id: "3",
    title: "Galpão Logístico - Grande SP",
    type: "galpao", 
    discountPercent: 42,
    thesis: "renda",
    prazo: "90 dias", 
    resultado: "Cap rate 11,2% a.a.",
    highlights: [
      "22.000 m² em condomínio logístico",
      "Localização estratégica Anhanguera",
      "Inquilino multinacional AAA",
      "Contrato de 10 anos + reajustes"
    ]
  },
  {
    id: "4",
    title: "Terreno Comercial - Faria Lima", 
    type: "imovel",
    discountPercent: 52,
    thesis: "valor",
    prazo: "120 dias",
    resultado: "Potencial 3x em 5 anos",
    highlights: [
      "2.800 m² em esquina nobre",
      "Zoneamento para edifício comercial",
      "Próximo ao metrô e centro financeiro", 
      "Projeto pré-aprovado incluído"
    ]
  },
  {
    id: "5",
    title: "Edifício Corporativo - Vila Olímpia",
    type: "imovel",
    discountPercent: 35,
    thesis: "sede-propria",
    prazo: "150 dias", 
    resultado: "Economia 40% vs aluguel",
    highlights: [
      "Edifício 8 andares totalmente ocupável",
      "100 vagas de garagem cobertas",
      "Certificação LEED Platinum",
      "Eliminação R$ 120k/mês em aluguéis"
    ]
  },
  {
    id: "6",
    title: "Máquinas Industriais Têxteis",
    type: "maquina",
    discountPercent: 55, 
    thesis: "capex-otimizado",
    prazo: "60 dias",
    resultado: "Payback < 1 ano",
    highlights: [
      "Linha completa Sulzer seminova",
      "Capacidade 2.000 ton/mês",
      "3 anos de uso com manutenção total",
      "Aumento 45% da capacidade instalada"
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