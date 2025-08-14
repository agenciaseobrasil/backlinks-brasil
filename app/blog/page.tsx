import BlogCard from '@/components/BlogCard';
import articles from '@/data/articles.json';

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="muted mt-2">Guias e dicas sobre link building e SEO</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
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
    </div>
  );
}