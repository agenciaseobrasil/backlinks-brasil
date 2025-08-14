import { notFound } from 'next/navigation';
import articles from '@/data/articles.json';

type Props = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: Props) {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container max-w-4xl">
        <article>
          {article.coverUrl && (
            <img 
              src={article.coverUrl} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-2xl mb-8"
            />
          )}
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          {article.description && (
            <p className="text-xl muted mb-8">{article.description}</p>
          )}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
        
        <div className="mt-12 pt-8 border-t">
          <a 
            href="/blog" 
            className="btn btn-outline"
          >
            ← Voltar ao Blog
          </a>
        </div>
      </div>
    </div>
  );
}