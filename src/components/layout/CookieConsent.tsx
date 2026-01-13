import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

export const CookieConsent = () => {
  const { showBanner, acceptCookies, rejectCookies } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-2xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon and Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 bg-accent-blue/10 rounded-lg shrink-0">
                <Cookie className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-foreground font-medium">
                  Utilizamos cookies para melhorar sua experiência
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Usamos cookies para análise de tráfego e melhoria contínua do site. 
                  Ao aceitar, você concorda com nossa{" "}
                  <Link 
                    to="/politica-de-privacidade" 
                    className="text-accent-blue hover:underline"
                  >
                    Política de Privacidade
                  </Link>.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={rejectCookies}
                className="flex-1 md:flex-none text-muted-foreground hover:text-foreground"
              >
                Recusar
              </Button>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="flex-1 md:flex-none bg-accent-blue hover:bg-accent-blue/90 text-white"
              >
                Aceitar
              </Button>
            </div>

            {/* Close button for mobile */}
            <button
              onClick={rejectCookies}
              className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
