import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export const CookieConsent = () => {
  const { showBanner, acceptCookies, rejectCookies } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card/98 backdrop-blur-lg border border-border rounded-2xl shadow-2xl p-5 md:p-6">
          <div className="flex flex-col items-center text-center gap-4">
            {/* Icon */}
            <div className="p-3 bg-accent-blue/10 rounded-full">
              <Cookie className="w-6 h-6 text-accent-blue" />
            </div>
            
            {/* Text */}
            <div className="space-y-2">
              <p className="text-base text-foreground font-semibold">
                Utilizamos cookies para melhorar sua experiência
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                Usamos cookies para análise de tráfego e melhoria contínua do site. 
                Ao continuar navegando, você concorda com nossa{" "}
                <Link 
                  to="/politica-de-privacidade" 
                  className="text-accent-blue hover:underline"
                >
                  Política de Privacidade
                </Link>.
              </p>
            </div>

            {/* Primary Accept Button */}
            <Button
              size="lg"
              onClick={acceptCookies}
              className="w-full md:w-auto md:min-w-[200px] bg-accent-blue hover:bg-accent-blue/90 text-white font-medium py-3 text-base shadow-lg hover:shadow-xl transition-all"
            >
              Aceitar e Continuar
            </Button>

            {/* Secondary Reject Link - subtle */}
            <button
              onClick={rejectCookies}
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors underline-offset-2 hover:underline"
            >
              Continuar sem aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
