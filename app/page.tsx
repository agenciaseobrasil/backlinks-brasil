import Hero from '@/components/Hero';
import PartnerStrip from '@/components/PartnerStrip';
import Filters from '@/components/Filters';
import BlogCard from '@/components/BlogCard';
import articles from '@/data/articles.json';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">Domínios Disponíveis</h2>
            <p className="muted mt-2">Encontre oportunidades de backlinks de qualidade</p>
          </div>
          <Filters />
        </div>
      </section>

      <PartnerStrip />

      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">Blog & Guias</h2>
            <p className="muted mt-2">Aprenda as melhores práticas de link building</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article) => (
              <BlogCard 
                key={article.slug}
                title={article.title}
                slug={article.slug}
                coverUrl={article.coverUrl}
                description={article.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}