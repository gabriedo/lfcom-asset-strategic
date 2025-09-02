import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, CheckCircle, MessageSquare, Calendar } from "lucide-react";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    aporte: "",
    interesses: [] as string[],
    mensagem: "",
    lgpdConsent: false
  });

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interesses: checked 
        ? [...prev.interesses, interest]
        : prev.interesses.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.lgpdConsent) {
      toast({
        title: "Consentimento necessário",
        description: "É necessário concordar com os termos de compartilhamento de dados.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form data:", formData);
      
      setIsSubmitted(true);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe retornará em até 24-48 horas."
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de falar sobre assessoria de leilões.";
  const calendlyUrl = "https://calendly.com/lfcom";

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-16">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8">
                  <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
                  <h1 className="text-display mb-4">Mensagem enviada!</h1>
                  <p className="text-body text-surface-medium mb-8">
                    Recebemos sua solicitação e nossa equipe retornará em até 24-48 horas úteis.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-body">
                    <strong>Precisa de atendimento imediato?</strong>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="default" size="lg">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageSquare size={20} />
                        WhatsApp
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" size="lg">
                      <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                        <Calendar size={20} />
                        Agendar reunião
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-surface-black text-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-hero mb-6 animate-fade-in">
                Vamos conversar sobre seu próximo investimento
              </h1>
              <p className="text-xl text-surface-medium mb-8 animate-slide-up">
                Nossa equipe está preparada para estruturar operações de leilão com a governança e previsibilidade que você exige.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-headline">Solicitar avaliação estratégica</CardTitle>
                      <CardDescription className="text-body">
                        Preencha o formulário abaixo e nossa equipe estruturará uma proposta personalizada para seu perfil.
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nome">Nome *</Label>
                            <Input
                              id="nome"
                              value={formData.nome}
                              onChange={(e) => handleInputChange("nome", e.target.value)}
                              required
                              placeholder="Seu nome completo"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="empresa">Empresa</Label>
                            <Input
                              id="empresa"
                              value={formData.empresa}
                              onChange={(e) => handleInputChange("empresa", e.target.value)}
                              placeholder="Nome da empresa (opcional)"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">E-mail *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              required
                              placeholder="seu@email.com"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="telefone">WhatsApp *</Label>
                            <Input
                              id="telefone"
                              type="tel"
                              value={formData.telefone}
                              onChange={(e) => handleInputChange("telefone", e.target.value)}
                              required
                              placeholder="(11) 99999-9999"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="aporte">Aporte estimado</Label>
                          <Select value={formData.aporte} onValueChange={(value) => handleInputChange("aporte", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione a faixa de investimento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ate-2m">Até R$ 2 milhões</SelectItem>
                              <SelectItem value="2m-5m">R$ 2 - 5 milhões</SelectItem>
                              <SelectItem value="5m-20m">R$ 5 - 20 milhões</SelectItem>
                              <SelectItem value="acima-20m">Acima de R$ 20 milhões</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label>Interesse em (pode selecionar múltiplos)</Label>
                          <div className="grid grid-cols-2 gap-3">
                            {["Imóveis", "Galpões", "Fábricas", "Máquinas", "Outros"].map((interest) => (
                              <div key={interest} className="flex items-center space-x-2">
                                <Checkbox
                                  id={interest}
                                  checked={formData.interesses.includes(interest)}
                                  onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                                />
                                <Label htmlFor={interest} className="text-sm font-normal cursor-pointer">
                                  {interest}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="mensagem">Mensagem</Label>
                          <Textarea
                            id="mensagem"
                            value={formData.mensagem}
                            onChange={(e) => handleInputChange("mensagem", e.target.value)}
                            rows={4}
                            placeholder="Conte-nos mais sobre seus objetivos de investimento..."
                          />
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="lgpd"
                            checked={formData.lgpdConsent}
                            onCheckedChange={(checked) => handleInputChange("lgpdConsent", checked as boolean)}
                            required
                          />
                          <Label htmlFor="lgpd" className="text-sm leading-5 cursor-pointer">
                            Concordo em compartilhar meus dados para contato sobre soluções da LFCOM e aceito a{" "}
                            <a href="/politica-de-privacidade" className="text-accent-gold hover:underline">
                              Política de Privacidade
                            </a>
                            . *
                          </Label>
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Enviando..." : "Enviar solicitação"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Trust Indicators */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-title">Por que escolher a LFCOM?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-medium">R$ 500M+ analisados</p>
                          <p className="text-sm text-surface-medium">Em ativos de leilão</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-medium">95% de sucesso</p>
                          <p className="text-sm text-surface-medium">Em operações realizadas</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-medium">Governança total</p>
                          <p className="text-sm text-surface-medium">Blindagem jurídica</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-title">Outras formas de contato</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="text-accent-gold" size={20} />
                        <div>
                          <p className="font-medium">E-mail</p>
                          <p className="text-sm text-surface-medium">contato@lfcom.com.br</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="text-accent-gold" size={20} />
                        <div>
                          <p className="font-medium">SLA de resposta</p>
                          <p className="text-sm text-surface-medium">24-48 horas úteis</p>
                        </div>
                      </div>

                      <div className="pt-4 space-y-3">
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <MessageSquare size={16} />
                            WhatsApp
                          </a>
                        </Button>
                        
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                            <Calendar size={16} />
                            Agendar reunião
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;