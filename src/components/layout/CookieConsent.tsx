import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";

export const CookieConsent = () => {
  const { showBanner, acceptCookies } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-neutral-800 text-white p-4 md:p-5">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm leading-relaxed mb-4">
            Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência 
            em nossos serviços e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, 
            você está ciente dessa funcionalidade. Conheça nossa{" "}
            <Link 
              to="/politica-de-privacidade" 
              className="text-accent-blue hover:underline"
            >
              Política de Privacidade
            </Link>{" "}
            e nosso{" "}
            <Link 
              to="/aviso-legal" 
              className="text-accent-blue hover:underline"
            >
              Aviso Legal
            </Link>.
          </p>
          
          <Button
            onClick={acceptCookies}
            className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-medium py-3"
          >
            Prosseguir
          </Button>
        </div>
      </div>
    </div>
  );
};
