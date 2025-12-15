import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const footerNavigation = [
  { name: "Home", href: "/" },
  { name: "Soluções", href: "/solucoes" },
  { name: "Resultados", href: "/resultados" },
  { name: "Insights", href: "/insights" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export const Footer = () => {
  return (
    <footer className="bg-surface-black text-surface-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo-branco.png" 
                alt="LFCOM Logo" 
                className="h-48 w-auto opacity-90"
              />
            </div>
            <p className="text-surface-medium text-sm leading-relaxed mb-4 max-w-sm">
              Assessoria especializada em leilões para grandes investidores e empresas.
            </p>
            <div className="text-surface-medium text-sm space-y-1">
              <p>R. Francisco Rocha, 198 – Batel</p>
              <p>Curitiba – PR, 80420-130</p>
              <p>+55 41 92003-0105</p>
              <p>suporte@lfcom.xyz</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <nav className="space-y-2">
              {footerNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-surface-medium hover:text-surface-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Legal */}
          <div>
            <div className="flex space-x-3 mb-4">
              <a 
                href="https://linkedin.com/company/lfcom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-surface-medium hover:text-surface-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com/lfcombrasil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-surface-medium hover:text-surface-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="space-y-2">
              <Link 
                to="/politica-de-privacidade" 
                className="block text-surface-medium hover:text-surface-white text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/aviso-legal" 
                className="block text-surface-medium hover:text-surface-white text-sm transition-colors"
              >
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-surface-medium/20 mt-8 pt-6">
          <p className="text-surface-medium text-xs text-center">
            © 2025 LFCOM. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};