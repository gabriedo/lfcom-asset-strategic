import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Soluções", href: "/solucoes" },
  { name: "Resultados", href: "/resultados" },
  { name: "Insights", href: "/insights" },
  { name: "Sobre", href: "/sobre" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo-preto.png" 
              alt="LFCOM"
              className="h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-body font-medium transition-colors hover:text-accent-gold ${
                  isActive(item.href) ? "text-accent-gold" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" size="sm">
              <Link to="/contato">Contato</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-body font-medium transition-colors hover:text-accent-gold ${
                  isActive(item.href) ? "text-accent-gold" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild variant="default" size="sm" className="w-full">
                <Link to="/contato">Contato</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};