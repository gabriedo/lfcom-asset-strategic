import { useParams, Link, Navigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { getPostBySlug } from "@/data/posts";
import { processMarkdown } from "@/lib/markdown-processor";

const InsightPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/insights" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long', 
      year: 'numeric'
    });
  };

  const shareUrl = `${window.location.origin}/insights/${post.slug}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" size="sm" className="mb-6">
                <Link to="/insights">
                  <ArrowLeft size={16} />
                  Voltar aos insights
                </Link>
              </Button>
              
              <div className="flex flex-wrap items-center gap-6 text-surface-medium mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readingMinutes} min de leitura</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="flex items-center gap-2"
                >
                  <Share2 size={16} />
                  Compartilhar
                </Button>
              </div>
              
              <h1 className="text-display mb-6 text-balance">
                {post.title}
              </h1>
              
              <p className="text-xl text-surface-medium mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none 
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-h1:text-display prose-h1:mb-8 prose-h1:mt-0
                  prose-h2:text-headline prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-title prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-body prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                  prose-li:text-body prose-li:leading-relaxed prose-li:mb-2
                  prose-blockquote:border-l-4 prose-blockquote:border-accent-gold 
                  prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-surface-medium
                  prose-code:bg-surface-light prose-code:px-2 prose-code:py-1 prose-code:rounded
                  prose-pre:bg-surface-dark prose-pre:text-surface-white"
                dangerouslySetInnerHTML={{ __html: processMarkdown(post.content) }}
              />
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-surface-black text-surface-white">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-surface-dark border-surface-medium">
              <CardContent className="p-8 text-center">
                <h2 className="text-headline text-surface-white mb-4">
                  Fale com a LFCOM
                </h2>
                <p className="text-body text-surface-medium mb-6 max-w-2xl mx-auto">
                  Quer aplicar essas estratégias ao seu portfólio? Nossa equipe está pronta para 
                  estruturar operações de leilão com a governança que você exige.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contato">
                      Agendar conversa estratégica
                    </Link>
                  </Button>
                  <Button asChild variant="hero-outline" size="lg">
                    <Link to="/solucoes">
                      Conhecer soluções
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-headline mb-8 text-center">
                Continue lendo
              </h3>
              <div className="text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/insights">
                    Ver todos os insights
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InsightPost;