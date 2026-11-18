import { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/* Página de destino da assessoria. Recebe quem pesquisou por assessoria em leilão de imóveis.
   Dois caminhos: WhatsApp direto para quem já tem imóvel em vista, diagnóstico para quem ainda procura. */
const WHATSAPP = "5541920030105";
const MENSAGEM =
  "Olá, vim pelo site da LFCOM. Tenho um imóvel em vista com leilão marcado e quero a conversa de 20 minutos.";

const ENTREGAS = [
  {
    titulo: "Custo total",
    texto:
      "Lance, comissão do leiloeiro, impostos, dívidas que acompanham o imóvel e custo de regularização. O número inteiro, não só o preço do edital.",
  },
  {
    titulo: "Prazo até a posse",
    texto: "Quem está no imóvel, o que o processo ainda permite e o que isso significa em tempo até você ter a chave.",
  },
  {
    titulo: "Lance máximo",
    texto:
      "O teto de lance para o seu objetivo, por escrito, antes do pregão. Se a conta não fecha, a recomendação é não entrar.",
  },
];

const ETAPAS = [
  {
    titulo: "Conversa de 20 minutos",
    texto: "Você conta o objetivo e o capital. Sai sabendo se leilão faz sentido no seu caso e por qual caminho.",
  },
  {
    titulo: "Análise",
    texto:
      "Edital, matrícula, processo, dívidas e ocupação do imóvel em vista. A maior parte do que se analisa é descartada.",
  },
  {
    titulo: "Lance",
    texto: "Habilitação no leiloeiro, estratégia e teto aprovados por você. A LFCOM acompanha o pregão.",
  },
  {
    titulo: "Do auto à chave",
    texto: "Pagamento, carta de arrematação, registro e posse, com um responsável só do começo ao fim.",
  },
];

const Assessoria = () => {
  const { search } = useLocation();

  useEffect(() => {
    document.title = "Assessoria em leilão de imóveis | LFCOM";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "A LFCOM analisa edital, matrícula e processo, define o lance máximo e acompanha a compra em leilão do lance até a chave. Conversa de 20 minutos sem custo.",
      );
    }
  }, []);

  const linkWhats = useMemo(() => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`, []);
  const linkDiagnostico = `/diagnostico${search || ""}`;

  const aoClicarWhats = (onde: string) => {
    trackEvent("assessoria_whatsapp", "conversion", onde);
    const w = window as unknown as { fbq?: (...a: unknown[]) => void };
    if (w.fbq) w.fbq("track", "Lead");
  };

  const Botoes = ({ onde }: { onde: string }) => (
    <div className="mt-8 grid gap-3 md:grid-cols-2">
      <a
        href={linkWhats}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => aoClicarWhats(onde)}
        className="flex items-center justify-center gap-3 bg-[#1E90FF] px-6 py-5 text-lg font-bold text-white hover:bg-[#1878d6]"
      >
        <MessageCircle className="h-5 w-5" /> Tenho um imóvel em vista
      </a>
      <Link
        to={linkDiagnostico}
        onClick={() => trackEvent("assessoria_diagnostico", "engagement", onde)}
        className="flex items-center justify-center gap-3 border border-white/30 px-6 py-5 text-lg font-bold text-white hover:border-white"
      >
        Ainda estou procurando <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#06080B] text-[#F2F0EC] font-inter">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 pt-6">
        <Link to="/" aria-label="LFCOM, página inicial">
          <img src="/logo-branco.png" alt="LFCOM" className="h-24 w-auto -my-8" />
        </Link>
        <span className="text-xs uppercase tracking-[0.25em] text-[#A9AEB5]">Assessoria</span>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-32 pt-10">
        <section>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1E90FF]">Assessoria em leilão de imóveis</p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Antes do lance, você sabe o custo total, o prazo até a posse e até onde ir.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#C9CDD3] md:text-lg">
            A LFCOM lê o edital, a matrícula e o processo, calcula o lance máximo para o seu objetivo e acompanha a
            compra do lance até a chave. Em qualquer leiloeiro, em todo o Brasil.
          </p>
          <Botoes onde="topo" />
          <p className="mt-3 text-sm text-[#A9AEB5]">
            O primeiro passo é uma conversa de 20 minutos, por telefone ou vídeo, sem custo.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O que você recebe antes de decidir</h2>
          <div className="mt-6 grid gap-3">
            {ENTREGAS.map((e, i) => (
              <div key={e.titulo} className="flex gap-5 border border-white/15 bg-white/[0.04] px-5 py-5">
                <span className="text-2xl font-extrabold text-[#1E90FF]">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold md:text-xl">{e.titulo}</h3>
                  <p className="mt-1 text-base leading-relaxed text-[#C9CDD3]">{e.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Como funciona</h2>
          <ol className="mt-6 grid gap-6 border-l border-white/15 pl-6">
            {ETAPAS.map((e, i) => (
              <li key={e.titulo}>
                <p className="text-xs uppercase tracking-[0.2em] text-[#1E90FF]">Etapa {i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold md:text-xl">{e.titulo}</h3>
                <p className="mt-1 text-base leading-relaxed text-[#C9CDD3]">{e.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-3 md:grid-cols-2">
          <div className="border border-white/15 bg-white/[0.04] px-5 py-6">
            <h2 className="text-xl font-extrabold tracking-tight">Para quem é</h2>
            <ul className="mt-4 grid gap-3 text-base leading-relaxed text-[#C9CDD3]">
              <li>Investidor ou empresa com R$ 300 mil ou mais para o lance.</li>
              <li>Quem já compra imóvel e nunca comprou em leilão.</li>
              <li>Quem tem um imóvel em vista com leilão marcado.</li>
            </ul>
          </div>
          <div className="border border-white/15 px-5 py-6">
            <h2 className="text-xl font-extrabold tracking-tight">Para quem não é</h2>
            <ul className="mt-4 grid gap-3 text-base leading-relaxed text-[#C9CDD3]">
              <li>Quem quer aprender a arrematar sozinho.</li>
              <li>Quem procura retorno garantido.</li>
              <li>
                Para buscar imóveis e pedir análises avulsas, o caminho é o{" "}
                <a href="https://consultaleilao.com" target="_blank" rel="noopener noreferrer" className="underline">
                  Consulta Leilão
                </a>
                .
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Quanto custa</h2>
          <p className="mt-4 text-base leading-relaxed text-[#C9CDD3] md:text-lg">
            Uma entrada de compromisso, abatida do valor final, e um percentual de êxito sobre o valor arrematado,
            que só existe se você arrematar. Os valores dependem do imóvel e do trabalho, são combinados na conversa
            e vão para o contrato.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">O que a LFCOM não faz</h2>
          <ul className="mt-4 grid gap-3 text-base leading-relaxed text-[#C9CDD3] md:text-lg">
            <li>Não vende imóvel e não é imobiliária.</li>
            <li>Não promete retorno, desconto nem resultado.</li>
            <li>Não recebe o dinheiro do lance. Você paga direto ao leiloeiro ou ao juízo.</li>
          </ul>
        </section>

        <section className="mt-16 border border-[#1E90FF]/40 bg-[#1E90FF]/10 px-5 py-7">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Tem um leilão marcado? Comece por ele.</h2>
          <p className="mt-3 text-base leading-relaxed text-[#C9CDD3] md:text-lg">
            Mande o link do imóvel e a data. Em 20 minutos você sabe se vale seguir com a análise.
          </p>
          <Botoes onde="fim" />
        </section>

        <section className="mt-12 text-sm leading-relaxed text-[#A9AEB5]">
          LFCOM INC LTDA. CNPJ 54.948.925/0001-98. Rua Francisco Rocha, 198, Batel, Curitiba, PR.
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 border-t border-white/10 bg-[#06080B]/95 px-5 py-3 md:hidden">
        <a
          href={linkWhats}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => aoClicarWhats("barra")}
          className="flex w-full items-center justify-center gap-3 bg-[#1E90FF] px-6 py-4 text-base font-bold text-white"
        >
          <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
        </a>
      </div>

      <footer className="mx-auto max-w-3xl px-5 pb-28 text-xs text-[#A9AEB5] md:pb-10">
        LFCOM Consultoria em Leilões. <Link to="/politica-de-privacidade" className="underline">Política de privacidade</Link>.{" "}
        <Link to="/aviso-legal" className="underline">Aviso legal</Link>.
      </footer>
    </div>
  );
};

export default Assessoria;
