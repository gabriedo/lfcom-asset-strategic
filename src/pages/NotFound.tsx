import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-light">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-surface-black mb-4">404</h1>
          <h2 className="text-headline mb-4">Página não encontrada</h2>
          <p className="text-body text-surface-medium mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg">
            <Link to="/">
              <Home size={20} />
              Ir para o início
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/contato">
              <Mail size={20} />
              Entrar em contato
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
