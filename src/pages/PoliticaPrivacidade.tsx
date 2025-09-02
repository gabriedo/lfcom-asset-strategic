import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-display mb-8">Política de Privacidade</h1>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <div>
                  <p className="text-body leading-relaxed">
                    <strong>Última atualização:</strong> Janeiro de 2024
                  </p>
                  <p className="text-body leading-relaxed">
                    A LFCOM ("nós", "nosso" ou "empresa") está comprometida em proteger e respeitar sua privacidade. 
                    Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">1. Dados Coletados</h2>
                  <p className="text-body leading-relaxed mb-4">Coletamos as seguintes informações:</p>
                  <ul className="space-y-2 text-body">
                    <li><strong>Dados de contato:</strong> nome, e-mail, telefone/WhatsApp</li>
                    <li><strong>Dados profissionais:</strong> empresa, cargo, faixa de investimento</li>
                    <li><strong>Dados de navegação:</strong> cookies, IP, páginas visitadas</li>
                    <li><strong>Comunicações:</strong> mensagens enviadas através de formulários</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline mb-4">2. Finalidade do Tratamento</h2>
                  <p className="text-body leading-relaxed mb-4">Utilizamos seus dados para:</p>
                  <ul className="space-y-2 text-body">
                    <li>Responder solicitações de contato e dúvidas</li>
                    <li>Oferecer nossos serviços de assessoria de leilões</li>
                    <li>Enviar comunicações comerciais relevantes</li>
                    <li>Melhorar nossa plataforma e experiência do usuário</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline mb-4">3. Base Legal</h2>
                  <p className="text-body leading-relaxed">
                    O tratamento dos seus dados pessoais é fundamentado no <strong>consentimento</strong> fornecido 
                    através do preenchimento de formulários e no <strong>legítimo interesse</strong> para prestação 
                    de serviços solicitados.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">4. Compartilhamento de Dados</h2>
                  <p className="text-body leading-relaxed mb-4">
                    Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto:
                  </p>
                  <ul className="space-y-2 text-body">
                    <li>Prestadores de serviços necessários para nossa operação (hosting, e-mail)</li>
                    <li>Autoridades competentes, quando exigido por lei</li>
                    <li>Parceiros comerciais, apenas com seu consentimento explícito</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline mb-4">5. Retenção de Dados</h2>
                  <p className="text-body leading-relaxed">
                    Mantemos seus dados pessoais pelo período necessário para cumprir as finalidades descritas ou 
                    conforme exigido por lei. Dados de contato comercial são mantidos por até <strong>5 anos</strong> 
                    após o último contato.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">6. Seus Direitos</h2>
                  <p className="text-body leading-relaxed mb-4">Conforme a LGPD, você tem direito a:</p>
                  <ul className="space-y-2 text-body">
                    <li>Confirmação da existência de tratamento dos seus dados</li>
                    <li>Acesso aos dados pessoais tratados</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Anonimização, bloqueio ou eliminação de dados</li>
                    <li>Portabilidade dos dados</li>
                    <li>Revogação do consentimento</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline mb-4">7. Cookies e Analytics</h2>
                  <p className="text-body leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência em nosso site e analisar o uso da plataforma. 
                    Você pode gerenciar cookies através das configurações do seu navegador. Utilizamos 
                    <strong> Google Analytics</strong> para análise de tráfego.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">8. Segurança</h2>
                  <p className="text-body leading-relaxed">
                    Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra 
                    acesso não autorizado, alteração, divulgação ou destruição, incluindo criptografia SSL e 
                    controles de acesso.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">9. Contato do DPO</h2>
                  <p className="text-body leading-relaxed">
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato com 
                    nosso Encarregado de Proteção de Dados:
                  </p>
                  <p className="text-body leading-relaxed">
                    <strong>E-mail:</strong> dpo@lfcom.com.br<br />
                    <strong>Endereço:</strong> [Endereço da LFCOM]
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">10. Alterações</h2>
                  <p className="text-body leading-relaxed">
                    Esta Política de Privacidade pode ser atualizada periodicamente. Alterações significativas 
                    serão comunicadas através do nosso site ou por e-mail. A versão atualizada entrará em vigor 
                    imediatamente após sua publicação.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">11. Legislação Aplicável</h2>
                  <p className="text-body leading-relaxed">
                    Esta política é regida pela Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e 
                    demais legislações aplicáveis no Brasil.
                  </p>
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

export default PoliticaPrivacidade;