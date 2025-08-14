type Props = { domain:string; da:number; priceCents:number; logo?:string; userAvatar?:string; };
export default function ListingCard({ domain, da, priceCents, logo, userAvatar }: Props){
  const price = (priceCents/100).toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
  return (
    <article className="card hover:shadow-md transition">
      <div className="flex items-center gap-3">
        {logo ? <img src={logo} alt="logo" className="w-8 h-8 rounded"/> : <div className="w-8 h-8 bg-gray-200 rounded"/>}
        <div className="font-medium">{domain}</div>
        <span className="ml-auto text-sm bg-gray-100 rounded-full px-3 py-1">DA {da}</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-semibold">{price}</div>
        {userAvatar && <img src={userAvatar} alt="vendedor" className="w-8 h-8 rounded-full"/>}
      </div>
      <a href={`/oferta/${encodeURIComponent(domain)}`} className="mt-4 inline-block text-sm underline">Detalhes &amp; Negociação</a>
    </article>
  );
}
