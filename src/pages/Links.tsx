import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/* Página de links da bio do Instagram (@lfcombrasil). Um toque para cada destino.
   Conta a visita e o clique no WhatsApp na mesma tabela do diagnóstico (funil_eventos, pagina "links"). */
const WHATSAPP = "5541920030105";
const MENSAGEM = "Olá, vim pelo Instagram da LFCOM e quero a conversa de 20 minutos.";
const ORIGEM = "utm_source=instagram&utm_medium=bio&utm_campaign=links";

const SUPABASE_URL = "https://qmwufkpyzcndzmrdrfql.supabase.co";
const SUPABASE_KEY = "sb_publishable_pY46iMq7H78j5wAaEcUlSw_ATXOEzJt";
const SESSAO = Math.random().toString(36).slice(2) + Date.now().toString(36);

function registrar(evento: "inicio" | "whatsapp") {
  try {
    fetch(`${SUPABASE_URL}/rest/v1/funil_eventos`, {
      method: "POST",
      keepalive: true,
      headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({
        pagina: "links", evento, passo: null, sessao: SESSAO,
        origem: "instagram", campanha: "links", conteudo: "bio",
      }),
    }).catch(() => undefined);
  } catch {
    /* a contagem nunca pode travar a página */
  }
}

const Links = () => {
  useEffect(() => {
    document.title = "LFCOM | Assessoria em leilão de imóveis";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Diagnóstico em seis perguntas, conversa de 20 minutos e busca de imóveis em leilão. Os caminhos da LFCOM em um só lugar.",
      );
    }
    registrar("inicio");
  }, []);

  const linkWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`;
  const base = "flex items-center justify-between gap-4 px-5 py-5 text-left";

  return (
    <div className="min-h-screen bg-[#06080B] text-[#F2F0EC] font-inter">
      <main className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-8">
        <header className="text-center">
          <img src="/logo-branco.png" alt="LFCOM" className="mx-auto h-24 w-auto -my-6" />
          <h1 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight">
            Assessoria em leilão de imóveis
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#C9CDD3]">
            Antes do lance, você sabe o custo total, o prazo até a posse e até onde ir.
          </p>
        </header>

        <nav className="mt-8 grid gap-3" aria-label="Caminhos da LFCOM">
          <Link
            to={`/diagnostico?${ORIGEM}`}
            onClick={() => trackEvent("links_diagnostico", "engagement", "bio")}
            className={`${base} bg-[#1E90FF] text-white hover:bg-[#1878d6]`}
          >
            <span>
              <span className="block text-lg font-bold">Fazer o diagnóstico</span>
              <span className="mt-1 block text-sm text-white/85">
                Seis perguntas, menos de um minuto. No fim, três imóveis reais na sua faixa.
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Link>

          <a
            href={linkWhats}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              registrar("whatsapp");
              trackEvent("links_whatsapp", "conversion", "bio");
            }}
            className={`${base} border border-white/30 hover:border-white`}
          >
            <span>
              <span className="block text-lg font-bold">Falar com a LFCOM</span>
              <span className="mt-1 block text-sm text-[#C9CDD3]">
                Conversa de 20 minutos pelo WhatsApp, sem custo.
              </span>
            </span>
            <MessageCircle className="h-5 w-5 shrink-0" />
          </a>

          <Link
            to={`/assessoria?${ORIGEM}`}
            onClick={() => trackEvent("links_assessoria", "engagement", "bio")}
            className={`${base} border border-white/30 hover:border-white`}
          >
            <span>
              <span className="block text-lg font-bold">Como funciona a assessoria</span>
              <span className="mt-1 block text-sm text-[#C9CDD3]">
                Da análise do edital, da matrícula e do processo até a chave.
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Link>

          <a
            href={`https://consultaleilao.com/?${ORIGEM}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("links_consulta_leilao", "engagement", "bio")}
            className={`${base} border border-white/30 hover:border-white`}
          >
            <span>
              <span className="block text-lg font-bold">Buscar imóveis em leilão</span>
              <span className="mt-1 block text-sm text-[#C9CDD3]">
                Consulta Leilão, a base de imóveis em leilão de todo o Brasil.
              </span>
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0" />
          </a>

          <Link
            to={`/?${ORIGEM}`}
            onClick={() => trackEvent("links_site", "engagement", "bio")}
            className={`${base} border border-white/30 hover:border-white`}
          >
            <span>
              <span className="block text-lg font-bold">Site da LFCOM</span>
              <span className="mt-1 block text-sm text-[#C9CDD3]">Quem somos e o que fazemos.</span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Link>
        </nav>

        <footer className="mt-auto pt-10 text-center text-xs leading-relaxed text-[#A9AEB5]">
          <p>LFCOM. Curitiba, atuação em todo o Brasil.</p>
          <p className="mt-2">
            <Link to="/politica-de-privacidade" className="underline underline-offset-2 hover:text-white">
              Política de privacidade
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Links;
