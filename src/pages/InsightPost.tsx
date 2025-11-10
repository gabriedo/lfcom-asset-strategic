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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Minimal Header */}
        <section className="pt-16 pb-8 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3 text-muted-foreground hover:text-foreground">
                <Link to="/insights">
                  <ArrowLeft className="mr-2" size={16} />
                  Insights
                </Link>
              </Button>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
                {post.title}
              </h1>
              
              {/* Excerpt */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
                {post.excerpt}
              </p>
              
              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-border/50 pt-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readingMinutes} min de leitura</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 hover:text-foreground transition-colors ml-auto"
                >
                  <Share2 size={16} />
                  Compartilhar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div 
                className="article-content
                  [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-8 [&_h1]:mt-16 [&_h1]:leading-tight
                  [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-6 [&_h2]:mt-16 [&_h2]:leading-tight
                  [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-4 [&_h3]:mt-12 [&_h3]:leading-tight
                  [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mb-3 [&_h4]:mt-10 [&_h4]:leading-tight
                  [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:mb-2 [&_h5]:mt-8 [&_h5]:leading-tight
                  [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-foreground/90
                  [&_p:first-child]:text-xl [&_p:first-child]:leading-relaxed
                  [&_strong]:font-semibold [&_strong]:text-foreground
                  [&_em]:italic [&_em]:text-foreground/80
                  [&_ul]:my-8 [&_ul]:space-y-3
                  [&_li]:text-lg [&_li]:leading-relaxed [&_li]:pl-2 [&_li]:text-foreground/90
                  [&_li]:before:content-['•'] [&_li]:before:mr-3 [&_li]:before:text-accent-blue
                  [&_blockquote]:border-l-2 [&_blockquote]:border-accent-blue
                  [&_blockquote]:pl-8 [&_blockquote]:pr-8 [&_blockquote]:py-6 [&_blockquote]:my-12
                  [&_blockquote]:text-2xl [&_blockquote]:font-light [&_blockquote]:italic 
                  [&_blockquote]:text-foreground/80 [&_blockquote]:leading-relaxed
                  [&_blockquote]:bg-muted/30
                  [&_a]:text-accent-blue [&_a]:underline [&_a]:underline-offset-4
                  [&_a:hover]:text-accent-blue/80"
                dangerouslySetInnerHTML={{ __html: processMarkdown(post.content) }}
              />
            </div>
          </div>
        </article>

        {/* Divider */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border-t border-border/50" />
          </div>
        </div>

        {/* CTA Section - Minimal */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforme insights em resultados
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Conecte-se com especialistas LFCOM para estruturar operações de leilão 
                com a governança e precisão que seu patrimônio exige.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contato">
                    Agendar conversa estratégica
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/solucoes">
                    Explorar soluções
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border-t border-border/50" />
          </div>
        </div>

        {/* Related Posts */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
                Continue explorando
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