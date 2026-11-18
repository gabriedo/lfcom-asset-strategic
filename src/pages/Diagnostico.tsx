import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, MessageCircle, MapPin, CalendarDays } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/* Diagnóstico LFCOM: seis perguntas, perfil e três imóveis reais da base Consulta Leilão.
   A chave abaixo é a chave pública (publishable) do Supabase; a tabela imoveis tem leitura pública. */
const SUPABASE_URL = "https://qmwufkpyzcndzmrdrfql.supabase.co";
const SUPABASE_KEY = "sb_publishable_pY46iMq7H78j5wAaEcUlSw_ATXOEzJt";

// Contagem anônima de cada passo do diagnóstico, sem cookie e sem dado pessoal.
// Serve para saber em que pergunta as pessoas param, mesmo quando não aceitam os cookies.
const SESSAO = Math.random().toString(36).slice(2, 12);
function funil(evento: string, passo?: number) {
  try {
    const q = new URLSearchParams(window.location.search);
    const utm = (k: string) => (q.get(k) || "").slice(0, 80) || null;
    fetch(`${SUPABASE_URL}/rest/v1/funil_eventos`, {
      method: "POST",
      keepalive: true,
      headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({
        pagina: "diagnostico", evento, passo: passo ?? null, sessao: SESSAO,
        origem: utm("utm_source"), campanha: utm("utm_campaign"), conteudo: utm("utm_content"),
      }),
    }).catch(() => undefined);
  } catch {
    // a medição nunca atrapalha a página
  }
}
const WHATSAPP = "5541920030105";
const PORTAL = "https://consultaleilao.com/imovel/";

type Opt = { id: string; label: string; hint?: string };
type Pergunta = { id: string; titulo: string; apoio?: string; opcoes: Opt[] };

const UFS = ["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"];

const PERGUNTAS: Pergunta[] = [
  {
    id: "objetivo",
    titulo: "O que você quer do imóvel?",
    apoio: "A resposta muda a conta que precisa fechar antes do lance.",
    opcoes: [
      { id: "renda", label: "Renda de aluguel" },
      { id: "revenda", label: "Comprar para revender" },
      { id: "empresa", label: "Uso da minha empresa", hint: "Galpão, fábrica, loja ou sede" },
      { id: "patrimonio", label: "Formar patrimônio de longo prazo" },
    ],
  },
  {
    id: "capital",
    titulo: "Quanto você tem disponível para o lance?",
    apoio: "Valor que pode estar líquido na data do leilão.",
    opcoes: [
      { id: "ate300", label: "Até R$ 300 mil" },
      { id: "300a500", label: "De R$ 300 mil a R$ 500 mil" },
      { id: "500a1m", label: "De R$ 500 mil a R$ 1 milhão" },
      { id: "1a3m", label: "De R$ 1 milhão a R$ 3 milhões" },
      { id: "3m", label: "Acima de R$ 3 milhões" },
    ],
  },
  {
    id: "tipo",
    titulo: "Que tipo de imóvel faz mais sentido para você?",
    opcoes: [
      { id: "galpao", label: "Galpão e industrial" },
      { id: "comercial", label: "Comercial", hint: "Loja, sala, prédio" },
      { id: "rural", label: "Rural", hint: "Fazenda, área, sítio" },
      { id: "terreno", label: "Terreno" },
      { id: "residencial", label: "Residencial" },
    ],
  },
  {
    id: "regiao",
    titulo: "Em que região você compraria?",
    opcoes: [
      { id: "PR", label: "Paraná" },
      { id: "SC", label: "Santa Catarina" },
      { id: "SP", label: "São Paulo" },
      { id: "BR", label: "Qualquer estado" },
      { id: "outro", label: "Outro estado" },
    ],
  },
  {
    id: "experiencia",
    titulo: "Qual a sua experiência com leilão?",
    opcoes: [
      { id: "nunca", label: "Nunca arrematei" },
      { id: "pouca", label: "Já arrematei uma ou duas vezes" },
      { id: "frequente", label: "Arremato com frequência" },
    ],
  },
  {
    id: "prazo",
    titulo: "Quando você pretende comprar?",
    opcoes: [
      { id: "30d", label: "Nos próximos 30 dias" },
      { id: "90d", label: "Em até três meses" },
      { id: "semdata", label: "Sem data definida" },
    ],
  },
];

const FAIXA: Record<string, [number, number]> = {
  ate300: [80_000, 300_000],
  "300a500": [200_000, 500_000],
  "500a1m": [350_000, 1_000_000],
  "1a3m": [700_000, 3_000_000],
  "3m": [2_000_000, 60_000_000],
};

const TIPOS: Record<string, string[]> = {
  galpao: ["Galpão", "Área Industrial", "Industrial"],
  comercial: ["Comercial", "Prédio Comercial", "Prédio", "Loja", "Sala Comercial"],
  rural: ["Fazenda", "Área Rural", "Sítio", "Terreno Rural", "Chácara"],
  terreno: ["Terreno", "Terreno Urbano"],
  residencial: ["Casa", "Apartamento", "Residencial", "Sobrado", "Cobertura"],
};

/* Leituras por tipo. Números da série Teses por Tipo de Ativo, extração de 10/11/2026. */
const TESE: Record<string, { nome: string; caminho: string; risco: string }> = {
  galpao: { nome: "Galpão e industrial", caminho: "aluguel a operador logístico ou industrial", risco: "vacância e adequação do imóvel" },
  comercial: { nome: "Comercial", caminho: "aluguel ou uso pelo próprio negócio", risco: "ponto e zoneamento" },
  rural: { nome: "Rural", caminho: "arrendamento, produção ou valorização da terra", risco: "posse e georreferenciamento" },
  terreno: { nome: "Terreno", caminho: "construção, loteamento ou espera", risco: "prazo sem renda e aprovação" },
  residencial: { nome: "Residencial", caminho: "revenda ou aluguel", risco: "ocupação" },
};

const ESTAGIO: Record<string, { nome: string; texto: string }> = {
  nunca: {
    nome: "Observador",
    texto: "Você ainda decide pelo preço anunciado. O primeiro passo é saber o custo total e o prazo até a chave antes de olhar o desconto.",
  },
  pouca: {
    nome: "Primeiro lance",
    texto: "Você já viu o custo real de perto. O que falta agora é critério de descarte: saber rápido quais imóveis não valem a análise.",
  },
  frequente: {
    nome: "Recorrente",
    texto: "Você já sabe o que perguntar. O ganho seguinte vem de método: lance máximo calculado antes, processo lido antes e execução delegada.",
  },
};

const OBJETIVO: Record<string, string> = {
  renda: "Para renda, a conta que decide é a do aluguel líquido sobre o custo total, não o desconto do edital.",
  revenda: "Para revenda, o que decide é o prazo até a chave e o custo total. Desconto alto com posse demorada pode não fechar a conta.",
  empresa: "Para uso da empresa, zoneamento, acesso e adequação do imóvel pesam mais que o desconto.",
  patrimonio: "Para patrimônio de longo prazo, dá para aceitar imóvel com mais etapas até a posse, desde que o preço de entrada compense a espera.",
};

type Lote = {
  id: number;
  titulo_limpo: string | null;
  titulo: string | null;
  tipo: string | null;
  cidade: string | null;
  estado: string | null;
  lance_minimo_num: number | null;
  desconto_pct: number | null;
  encerra_em: string | null;
  modalidade_norm: string | null;
};

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const dataBR = (iso: string) => new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

async function buscarLotes(capital: string, tipo: string, uf: string | null): Promise<Lote[]> {
  const [min, max] = FAIXA[capital];
  const agora = Date.now();
  const de = new Date(agora + 3 * 864e5).toISOString();
  const ate = new Date(agora + 45 * 864e5).toISOString();
  const p = new URLSearchParams();
  p.set("select", "id,titulo_limpo,titulo,tipo,cidade,estado,lance_minimo_num,desconto_pct,encerra_em,modalidade_norm");
  p.set("suspenso_em", "is.null");
  p.append("encerra_em", `gte.${de}`);
  p.append("encerra_em", `lte.${ate}`);
  p.append("lance_minimo_num", `gte.${min}`);
  p.append("lance_minimo_num", `lte.${max}`);
  p.set("tipo", `in.(${TIPOS[tipo].map((t) => `"${t}"`).join(",")})`);
  if (uf) p.set("estado", `eq.${uf}`);
  p.set("order", "desconto_pct.desc.nullslast");
  p.set("limit", "24");
  const r = await fetch(`${SUPABASE_URL}/rest/v1/imoveis?${p.toString().replace(/\+/g, "%20")}`, { headers: { apikey: SUPABASE_KEY } });
  if (!r.ok) throw new Error(`base ${r.status}`);
  const rows: Lote[] = await r.json();
  return rows.filter((l) => l.lance_minimo_num && l.encerra_em && (l.desconto_pct == null || (l.desconto_pct >= 0 && l.desconto_pct <= 85)));
}

function escolherTres(rows: Lote[]): Lote[] {
  const out: Lote[] = [];
  const cidades = new Set<string>();
  for (const l of rows) {
    const k = `${l.cidade}-${l.estado}`;
    if (cidades.has(k)) continue;
    cidades.add(k);
    out.push(l);
    if (out.length === 3) return out;
  }
  const titulos = new Set(out.map((l) => l.titulo_limpo || l.titulo));
  for (const l of rows) {
    if (out.length === 3) break;
    const t = l.titulo_limpo || l.titulo;
    if (out.includes(l) || titulos.has(t)) continue;
    titulos.add(t);
    out.push(l);
  }
  return out;
}

const Diagnostico = () => {
  const [passo, setPasso] = useState(0);
  const [resp, setResp] = useState<Record<string, string>>({});
  const [uf, setUf] = useState("");
  const [lotes, setLotes] = useState<Lote[] | null>(null);
  const [ampliado, setAmpliado] = useState(false);
  const [erro, setErro] = useState(false);
  const [nome, setNome] = useState("");

  const total = PERGUNTAS.length;
  const fim = passo >= total;
  const pergunta = PERGUNTAS[Math.min(passo, total - 1)];

  useEffect(() => {
    document.title = "Diagnóstico de leilão de imóveis | LFCOM";
    trackEvent("diagnostico_inicio", "diagnostico");
    funil("inicio");
  }, []);

  const ufFinal = resp.regiao === "outro" ? uf : resp.regiao === "BR" ? null : resp.regiao ?? null;

  useEffect(() => {
    if (!fim) return;
    let vivo = true;
    (async () => {
      try {
        let rows = await buscarLotes(resp.capital, resp.tipo, ufFinal);
        let amp = false;
        if (rows.length < 3 && ufFinal) {
          rows = await buscarLotes(resp.capital, resp.tipo, null);
          amp = true;
        }
        if (!vivo) return;
        setAmpliado(amp);
        setLotes(escolherTres(rows));
        trackEvent("diagnostico_concluido", "diagnostico", `${resp.tipo}|${resp.capital}|${resp.regiao}`);
        funil("concluido");
      } catch {
        if (vivo) { setErro(true); setLotes([]); }
      }
    })();
    return () => { vivo = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fim]);

  const escolher = (id: string) => {
    const novo = { ...resp, [pergunta.id]: id };
    setResp(novo);
    trackEvent("diagnostico_resposta", "diagnostico", `${pergunta.id}:${id}`);
    funil("resposta", passo + 1);
    if (pergunta.id === "regiao" && id === "outro") return;
    setTimeout(() => setPasso((p) => p + 1), 180);
  };

  const rotulo = (pid: string) => {
    const q = PERGUNTAS.find((x) => x.id === pid)!;
    if (pid === "regiao" && resp.regiao === "outro") return uf;
    return q.opcoes.find((o) => o.id === resp[pid])?.label ?? "";
  };

  const linkWhats = useMemo(() => {
    if (!fim) return "#";
    const linhas = [
      "Olá, fiz o diagnóstico no site da LFCOM e quero a conversa de 20 minutos.",
      nome ? `Nome: ${nome}` : "",
      `Objetivo: ${rotulo("objetivo")}`,
      `Capital para o lance: ${rotulo("capital")}`,
      `Tipo de imóvel: ${rotulo("tipo")}`,
      `Região: ${rotulo("regiao")}`,
      `Experiência: ${rotulo("experiencia")}`,
      `Prazo: ${rotulo("prazo")}`,
      lotes && lotes.length ? `Imóveis que apareceram: ${lotes.map((l) => `#${l.id}`).join(", ")}` : "",
    ].filter(Boolean);
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(linhas.join("\n"))}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fim, lotes, nome]);

  const aoClicarWhats = () => {
    trackEvent("diagnostico_whatsapp", "conversion", `${resp.tipo}|${resp.capital}`);
    funil("whatsapp");
    const w = window as unknown as { fbq?: (...a: unknown[]) => void };
    if (w.fbq) w.fbq("track", "Lead");
  };

  const tese = resp.tipo ? TESE[resp.tipo] : null;
  const estagio = resp.experiencia ? ESTAGIO[resp.experiencia] : null;

  return (
    <div className="min-h-screen bg-[#06080B] text-[#F2F0EC] font-inter">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 pt-6">
        <Link to="/" aria-label="LFCOM, página inicial">
          <img src="/logo-branco.png" alt="LFCOM" className="h-24 w-auto -my-8" />
        </Link>
        <span className="text-xs uppercase tracking-[0.25em] text-[#A9AEB5]">Diagnóstico</span>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-5 md:pt-8">
        {!fim && (
          <section>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              {PERGUNTAS.map((_, i) => (
                <div key={i} className={`h-1 flex-1 ${i <= passo ? "bg-[#1E90FF]" : "bg-white/15"}`} />
              ))}
            </div>

            {passo === 0 && (
              <p className="mb-5 text-sm leading-relaxed text-[#C9CDD3] md:mb-8 md:text-lg">
                Seis perguntas, menos de um minuto. No fim você recebe a leitura do seu perfil e três imóveis reais,
                em leilão agora, dentro do seu capital.
              </p>
            )}

            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#1E90FF] md:mb-3">Pergunta {passo + 1} de {total}</p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{pergunta.titulo}</h1>
            {pergunta.apoio && <p className="mt-2 text-sm text-[#A9AEB5] md:mt-4 md:text-lg">{pergunta.apoio}</p>}

            <div className="mt-5 grid gap-3 md:mt-8">
              {pergunta.opcoes.map((o) => {
                const ativo = resp[pergunta.id] === o.id;
                return (
                  <button
                    key={o.id}
                    onClick={() => escolher(o.id)}
                    className={`flex w-full items-center justify-between border px-5 py-4 text-left transition-colors md:py-5 ${
                      ativo ? "border-[#1E90FF] bg-[#1E90FF]/15" : "border-white/15 bg-white/[0.04] hover:border-white/40"
                    }`}
                  >
                    <span>
                      <span className="block text-lg font-semibold md:text-xl">{o.label}</span>
                      {o.hint && <span className="mt-1 block text-sm text-[#A9AEB5]">{o.hint}</span>}
                    </span>
                    {ativo ? <Check className="h-5 w-5 text-[#1E90FF]" /> : <ArrowRight className="h-5 w-5 text-white/40" />}
                  </button>
                );
              })}
            </div>

            {pergunta.id === "regiao" && resp.regiao === "outro" && (
              <div className="mt-5 flex items-center gap-3">
                <select
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
                  className="flex-1 border border-white/25 bg-[#0C1118] px-4 py-4 text-lg text-white"
                  aria-label="Estado"
                >
                  <option value="">Escolha o estado</option>
                  {UFS.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
                <button
                  disabled={!uf}
                  onClick={() => setPasso((p) => p + 1)}
                  className="bg-[#1E90FF] px-6 py-4 text-lg font-semibold text-white disabled:opacity-40"
                >
                  Continuar
                </button>
              </div>
            )}

            {passo > 0 && (
              <button onClick={() => setPasso((p) => p - 1)} className="mt-8 inline-flex items-center gap-2 text-sm text-[#A9AEB5] hover:text-white">
                <ArrowLeft className="h-4 w-4" /> Voltar
              </button>
            )}
          </section>
        )}

        {fim && tese && estagio && (
          <section>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#1E90FF]">Sua leitura</p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Estágio: {estagio.nome}. Tese: {tese.nome.toLowerCase()}.
            </h1>

            <a
              href={linkWhats}
              target="_blank"
              rel="noopener noreferrer"
              onClick={aoClicarWhats}
              className="mt-6 flex w-full items-center justify-center gap-3 bg-[#1E90FF] px-6 py-4 text-lg font-bold text-white hover:bg-[#1878d6]"
            >
              <MessageCircle className="h-5 w-5" /> Continuar no WhatsApp
            </a>
            <p className="mt-2 text-xs text-[#A9AEB5]">
              Abre o WhatsApp com as suas respostas já escritas. A leitura e os três imóveis estão logo abaixo.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="border border-white/15 bg-white/[0.04] p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1E90FF]">Onde você está</p>
                <p className="text-base leading-relaxed text-[#E6E8EB]">{estagio.texto}</p>
              </div>
              <div className="border border-white/15 bg-white/[0.04] p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1E90FF]">O que decide o seu negócio</p>
                <p className="text-base leading-relaxed text-[#E6E8EB]">
                  {OBJETIVO[resp.objetivo]} Em {tese.nome.toLowerCase()}, o retorno costuma vir por {tese.caminho}, e o risco que decide é {tese.risco}.
                </p>
              </div>
            </div>

            <h2 className="mt-12 text-2xl font-extrabold tracking-tight md:text-3xl">Três imóveis em leilão agora, dentro do seu capital</h2>
            <p className="mt-2 text-sm text-[#A9AEB5]">
              {rotulo("tipo")}, {rotulo("capital").replace(/^(De|Até|Acima)/, (m) => m.toLowerCase())}, {ampliado ? "em todo o Brasil, porque na região escolhida há menos de três neste momento" : rotulo("regiao")}.
            </p>

            <div className="mt-6 grid gap-4">
              {lotes === null && <div className="border border-white/15 p-6 text-[#A9AEB5]">Consultando a base…</div>}
              {lotes && lotes.length === 0 && (
                <div className="border border-white/15 p-6 text-[#C9CDD3]">
                  {erro
                    ? "Não foi possível consultar a base agora. Na conversa levamos a seleção pronta."
                    : "Não há lote com esse recorte encerrando nas próximas semanas. Na conversa levamos opções próximas do seu perfil."}
                </div>
              )}
              {lotes && lotes.map((l) => (
                <a
                  key={l.id}
                  href={`${PORTAL}${l.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("diagnostico_lote", "diagnostico", String(l.id))}
                  className="block border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-[#1E90FF]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E90FF]">{l.tipo}{l.modalidade_norm ? `, ${l.modalidade_norm}` : ""}</p>
                    <p className="text-xs text-[#A9AEB5]">Lote #{l.id}</p>
                  </div>
                  <p className="mt-2 text-lg font-semibold leading-snug">{l.titulo_limpo || l.titulo || l.tipo}</p>
                  <div className="mt-4 flex flex-wrap items-end gap-x-10 gap-y-3">
                    <div>
                      <p className="text-xs text-[#A9AEB5]">Lance mínimo</p>
                      <p className="text-2xl font-extrabold tabular-nums">{brl(l.lance_minimo_num!)}</p>
                    </div>
                    {l.desconto_pct != null && l.desconto_pct > 0 && (
                      <div>
                        <p className="text-xs text-[#A9AEB5]">Abaixo da avaliação do leilão</p>
                        <p className="text-2xl font-extrabold tabular-nums">{l.desconto_pct.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%</p>
                      </div>
                    )}
                    <div className="text-sm text-[#C9CDD3]">
                      <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {l.cidade}, {l.estado}</p>
                      <p className="mt-1 flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Encerra em {dataBR(l.encerra_em!)}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#1E90FF]">Ver no Consulta Leilão</p>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#A9AEB5]">
              Seleção automática da base Consulta Leilão, pelo recorte que você informou. Não é recomendação de investimento.
              Nenhum destes imóveis foi analisado pela LFCOM: a análise vem depois, com edital, matrícula e processo.
              O desconto é sobre a avaliação do leilão, não sobre valor de mercado.
            </p>

            <div className="mt-12 border border-[#1E90FF]/50 bg-[#0C2038]/60 p-6 md:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Conversa de 20 minutos, sem custo</h2>
              <p className="mt-3 text-base leading-relaxed text-[#E6E8EB]">
                Olhamos o seu perfil e estes imóveis antes de falar com você. Você sai da conversa sabendo o que vale análise,
                o que descartar e como funciona a assessoria da LFCOM, do edital ao registro.
              </p>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome (opcional)"
                className="mt-5 w-full border border-white/25 bg-[#06080B] px-4 py-4 text-lg text-white placeholder:text-white/40"
                aria-label="Seu nome"
              />
              <a
                href={linkWhats}
                target="_blank"
                rel="noopener noreferrer"
                onClick={aoClicarWhats}
                className="mt-4 flex w-full items-center justify-center gap-3 bg-[#1E90FF] px-6 py-5 text-lg font-bold text-white hover:bg-[#1878d6]"
              >
                <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp com as minhas respostas
              </a>
              <p className="mt-3 text-xs text-[#A9AEB5]">
                O botão abre o WhatsApp com as suas respostas já escritas. Nada é enviado sem você confirmar.
              </p>
            </div>

            <button
              onClick={() => { setPasso(0); setResp({}); setLotes(null); setUf(""); setErro(false); }}
              className="mt-8 inline-flex items-center gap-2 text-sm text-[#A9AEB5] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Refazer o diagnóstico
            </button>
          </section>
        )}
      </main>

      <footer className="mx-auto max-w-3xl px-5 pb-10 text-xs text-[#A9AEB5]">
        LFCOM Consultoria em Leilões. <Link to="/politica-de-privacidade" className="underline">Política de privacidade</Link>.{" "}
        <Link to="/aviso-legal" className="underline">Aviso legal</Link>.
      </footer>
    </div>
  );
};

export default Diagnostico;
