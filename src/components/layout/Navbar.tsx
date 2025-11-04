import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;
  
  // No homepage, começa transparente. Em outras páginas, começa branco
  const shouldBeTransparent = isHomepage && !isScrolled;
  const shouldUseWhiteText = shouldBeTransparent;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldBeTransparent ? "bg-black/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none" : "bg-background/95 backdrop-blur-md shadow-sm"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={shouldUseWhiteText ? "/logo-branco.png" : "/logo-preto.png"}
              alt="LFCOM"
              className="h-40 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-body font-medium transition-colors hover:text-accent-gold ${
                  isActive(item.href) 
                    ? "text-accent-gold" 
                    : shouldUseWhiteText 
                    ? "text-white" 
                    : "text-foreground"
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
              className={shouldUseWhiteText ? "text-white hover:bg-white/10" : ""}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-background/95 backdrop-blur-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-body font-medium transition-colors hover:text-accent-gold ${
                  isActive(item.href) 
                    ? "text-accent-gold" 
                    : shouldUseWhiteText 
                    ? "text-white" 
                    : "text-foreground"
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