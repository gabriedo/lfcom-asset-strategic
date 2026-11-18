import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";

export const CookieConsent = () => {
  const { showBanner, acceptCookies } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-neutral-800 text-white px-4 py-3 md:p-5">
        {/* No celular o aviso fica em uma faixa baixa, para não cobrir o conteúdo da página. */}
        <div className="max-w-4xl mx-auto flex items-center gap-3 md:block">
          <p className="flex-1 text-xs leading-snug md:mb-4 md:text-sm md:leading-relaxed">
            <span className="md:hidden">
              Usamos cookies e tecnologias semelhantes para melhorar a sua experiência e recomendar conteúdo.
              Ao continuar, você está ciente. Veja a{" "}
            </span>
            <span className="hidden md:inline">
              Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência
              em nossos serviços e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços,
              você está ciente dessa funcionalidade. Conheça nossa{" "}
            </span>
            <Link
              to="/politica-de-privacidade"
              className="text-accent-blue hover:underline"
            >
              Política de Privacidade
            </Link>{" "}
            e <span className="hidden md:inline">nosso </span><span className="md:hidden">o </span>
            <Link
              to="/aviso-legal"
              className="text-accent-blue hover:underline"
            >
              Aviso Legal
            </Link>.
          </p>

          <Button
            onClick={acceptCookies}
            className="shrink-0 bg-neutral-700 hover:bg-neutral-600 text-white font-medium px-4 py-2 md:w-full md:py-3"
          >
            Prosseguir
          </Button>
        </div>
      </div>
    </div>
  );
};
