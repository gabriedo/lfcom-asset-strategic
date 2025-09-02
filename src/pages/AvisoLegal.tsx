import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AlertTriangle } from "lucide-react";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <AlertTriangle className="text-amber-500" size={32} />
                <h1 className="text-display">Aviso Legal</h1>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <div>
                  <p className="text-body leading-relaxed">
                    <strong>Última atualização:</strong> Janeiro de 2024
                  </p>
                  <p className="text-body leading-relaxed">
                    Este documento estabelece os termos e condições para o uso dos serviços da LFCOM e 
                    esclarece aspectos importantes sobre nossos serviços de assessoria de leilões.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">1. Natureza dos Serviços</h2>
                  <p className="text-body leading-relaxed">
                    A LFCOM oferece <strong>serviços de assessoria e consultoria</strong> para participação em leilões 
                    de ativos. Não somos uma corretora de valores, instituição financeira ou gestora de recursos. 
                    Nossa atuação é limitada à orientação técnica, jurídica e estratégica.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">2. Isenção de Garantias de Retorno</h2>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-4">
                    <p className="text-body leading-relaxed font-medium">
                      ⚠️ <strong>IMPORTANTE:</strong> Não garantimos retornos financeiros específicos ou 
                      resultados predeterminados em leilões.
                    </p>
                  </div>
                  <ul className="space-y-2 text-body">
                    <li>Investimentos em leilões envolvem riscos inerentes de mercado</li>
                    <li>Desempenhos passados não garantem resultados futuros</li>
                    <li>Valores de ativos podem flutuar com base em condições de mercado</li>
                    <li>A competição em leilões pode resultar em valores acima do estimado</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline mb-4">3. Riscos do Mercado</h2>
                  <p className="text-body leading-relaxed mb-4">
                    Participação em leilões de ativos envolve diversos riscos que devem ser considerados:
                  </p>
                  <ul className="space-y-2 text-body">
                    <li><strong>Risco de liquidez:</strong> dificuldade de venda posterior do ativo</li>
                    <li><strong>Risco jurídico:</strong> pendências legais não identificadas previamente</li>
                    <li><strong>Risco técnico:</strong> custos de manutenção/adequação superiores ao estimado</li>
                    <li><strong>Risco de mercado:</strong> variação nos preços dos ativos</li>
                    <li><strong>Risco operacional:</strong> custos adicionais de transferência e regularização</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline mb-4">4. Cases e Exemplos</h2>
                  <p className="text-body leading-relaxed">
                    Os cases apresentados em nosso site e materiais são <strong>meramente ilustrativos</strong> e 
                    baseados em operações reais anonimizadas. Estes exemplos:
                  </p>
                  <ul className="space-y-2 text-body">
                    <li>Não constituem promessa de resultados futuros</li>
                    <li>Representam situações específicas e não replicáveis</li>
                    <li>Foram realizados em condições de mercado particulares</li>
                    <li>Não devem ser interpretados como recomendação de investimento</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline mb-4">5. Não Constitui Oferta Pública</h2>
                  <p className="text-body leading-relaxed">
                    Os serviços da LFCOM <strong>não constituem oferta pública</strong> de valores mobiliários ou 
                    qualquer tipo de investimento coletivo. Cada operação é estruturada individualmente conforme 
                    o perfil e objetivos específicos do cliente.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">6. Recomendação de Avaliação Individual</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                    <p className="text-body leading-relaxed font-medium">
                      💡 <strong>RECOMENDAÇÃO:</strong> Consulte sempre seus assessores financeiros, 
                      contadores e advogados antes de tomar decisões de investimento.
                    </p>
                  </div>
                  <p className="text-body leading-relaxed">
                    Cada situação patrimonial é única e requer análise individualizada considerando objetivos 
                    pessoais, tolerância ao risco e situação financeira específica.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">7. Limitação de Responsabilidade</h2>
                  <p className="text-body leading-relaxed">
                    A LFCOM atua com diligência profissional e utiliza as melhores práticas de mercado, porém 
                    <strong>nossa responsabilidade é limitada</strong> aos serviços de assessoria prestados. 
                    Não nos responsabilizamos por:
                  </p>
                  <ul className="space-y-2 text-body">
                    <li>Mudanças nas condições de mercado</li>
                    <li>Decisões finais de investimento do cliente</li>
                    <li>Fatores externos que afetem o valor dos ativos</li>
                    <li>Alterações na legislação aplicável</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline mb-4">8. Adequação do Investidor</h2>
                  <p className="text-body leading-relaxed">
                    Nossos serviços são direcionados a <strong>investidores qualificados</strong> com:
                  </p>
                  <ul className="space-y-2 text-body">
                    <li>Capacidade de investimento mínima de R$ 2 milhões</li>
                    <li>Conhecimento sobre riscos de mercado</li>
                    <li>Experiência em investimentos alternativos</li>
                    <li>Capacidade de suportar eventuais perdas</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-headline mb-4">9. Confidencialidade</h2>
                  <p className="text-body leading-relaxed">
                    Todas as informações compartilhadas entre a LFCOM e o cliente são tratadas com 
                    <strong> absoluta confidencialidade</strong>. Nos comprometemos a manter sigilo sobre 
                    estratégias, operações e dados pessoais/corporativos.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">10. Jurisdição e Lei Aplicável</h2>
                  <p className="text-body leading-relaxed">
                    Este aviso legal é regido pelas leis brasileiras. Qualquer disputa será submetida à 
                    jurisdição dos tribunais de São Paulo/SP, Brasil.
                  </p>
                </div>

                <div>
                  <h2 className="text-headline mb-4">11. Contato</h2>
                  <p className="text-body leading-relaxed">
                    Para esclarecimentos sobre este aviso legal ou nossos serviços:
                  </p>
                  <p className="text-body leading-relaxed">
                    <strong>E-mail:</strong> juridico@lfcom.com.br<br />
                    <strong>Telefone:</strong> (11) 99999-9999<br />
                    <strong>Endereço:</strong> [Endereço da LFCOM]
                  </p>
                </div>

                <div className="bg-gray-50 border rounded-lg p-6">
                  <p className="text-body leading-relaxed font-medium text-center">
                    Ao utilizar nossos serviços, você confirma ter lido, compreendido e concordado com 
                    todos os termos deste Aviso Legal.
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

export default AvisoLegal;