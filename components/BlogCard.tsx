type Props = { title:string; slug:string; coverUrl?:string; description?:string };
export default function BlogCard({ title, slug, coverUrl, description }: Props){
  return (
    <article className="card hover:shadow-md transition">
      {coverUrl ? <img src={coverUrl} alt={title} className="rounded-xl w-full h-40 object-cover mb-3"/> : null}
      <h3 className="font-semibold text-lg">{title}</h3>
      {description ? <p className="muted text-sm mt-1">{description}</p> : null}
      <a href={`/blog/${slug}`} className="mt-3 inline-block text-sm underline">Ler artigo</a>
    </article>
  )
}
