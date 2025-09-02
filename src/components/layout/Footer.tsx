import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const footerNavigation = [
  { name: "Soluções", href: "/solucoes" },
  { name: "Resultados", href: "/resultados" },
  { name: "Insights", href: "/insights" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export const Footer = () => {
  return (
    <footer className="bg-surface-black text-surface-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/7ef599a7-0e33-4c04-b2e7-aa2be6417721.png" 
              alt="LFCOM"
              className="h-8 w-auto"
            />
            <p className="text-body text-surface-medium max-w-sm">
              Assessoria de leilões para grandes empresários e investidores. 
              Transformamos ativos de leilão em patrimônio estratégico.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-title text-surface-white">Navegação</h3>
            <ul className="space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-body text-surface-medium hover:text-surface-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="space-y-4">
            <h3 className="text-title text-surface-white">Conecte-se</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-surface-medium hover:text-surface-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-surface-medium hover:text-surface-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-caption text-surface-medium">
              contato@lfcom.com.br
            </p>
          </div>
        </div>

        <div className="border-t border-surface-dark mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-caption text-surface-medium">
              © 2024 LFCOM. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/politica-privacidade"
                className="text-caption text-surface-medium hover:text-surface-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/aviso-legal"
                className="text-caption text-surface-medium hover:text-surface-white transition-colors"
              >
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};