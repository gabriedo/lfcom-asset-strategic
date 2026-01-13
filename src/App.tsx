import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solucoes from "./pages/Solucoes";
import Resultados from "./pages/Resultados";
import Insights from "./pages/Insights";
import InsightPost from "./pages/InsightPost";
import CaseDetail from "./pages/CaseDetail";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import QuizResultado from "./pages/QuizResultado";
import LeiloesPatrimonio from "./pages/LeiloesPatrimonio";
import LeiloesMaquinas from "./pages/LeiloesMaquinas";
import LeiloesEmpresas from "./pages/LeiloesEmpresas";
import ConsultoriaLeiloes from "./pages/ConsultoriaLeiloes";
import GestaoAtivos from "./pages/GestaoAtivos";
import DueDiligence from "./pages/DueDiligence";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import AvisoLegal from "./pages/AvisoLegal";
import Status from "./pages/Status";
import NotFound from "./pages/NotFound";
import { CookieConsent } from "./components/layout/CookieConsent";
import { ScrollToTop } from "./hooks/useScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightPost />} />
          <Route path="/case/:id" element={<CaseDetail />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quiz-resultado" element={<QuizResultado />} />
          <Route path="/leiloes-patrimonio" element={<LeiloesPatrimonio />} />
          <Route path="/leiloes-maquinas" element={<LeiloesMaquinas />} />
          <Route path="/leiloes-empresas" element={<LeiloesEmpresas />} />
          <Route path="/consultoria-leiloes" element={<ConsultoriaLeiloes />} />
          <Route path="/gestao-ativos" element={<GestaoAtivos />} />
          <Route path="/due-diligence" element={<DueDiligence />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/status" element={<Status />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
