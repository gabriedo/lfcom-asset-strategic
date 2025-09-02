import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Filter } from "lucide-react";
import { posts, getAllTags } from "@/data/posts";

const Insights = () => {
  const [selectedTag, setSelectedTag] = useState<string>("todos");
  const allTags = getAllTags();

  const filteredPosts = selectedTag === "todos" 
    ? posts 
    : posts.filter(post => post.tags.includes(selectedTag));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long', 
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-surface-black text-surface-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-hero mb-6 animate-fade-in">
                Insights do Mercado
              </h1>
              <p className="text-xl text-surface-medium mb-8 animate-slide-up">
                Análises, estratégias e tendências do mercado de leilões para empresários e investidores que pensam grande.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-surface-medium">
                <Filter size={20} />
                <span className="text-body font-medium">Filtrar por:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTag === "todos" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag("todos")}
                >
                  Todos
                </Button>
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover-lift overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 text-surface-medium mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-caption">{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span className="text-caption">{post.readingMinutes} min</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-title hover:text-accent-gold transition-colors">
                      <Link to={`/insights/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-body text-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
                      <Link to={`/insights/${post.slug}`}>
                        Ler artigo →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-body text-surface-medium">
                  Nenhum artigo encontrado para esta categoria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-surface-light">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-headline mb-4">
                Receba nossos insights semanalmente
              </h2>
              <p className="text-body text-surface-medium mb-8">
                Análises exclusivas e oportunidades de mercado direto na sua caixa de entrada.
              </p>
              <Button asChild size="lg">
                <Link to="/contato">
                  Quero receber insights
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;