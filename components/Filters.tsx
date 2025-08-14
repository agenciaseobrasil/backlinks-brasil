'use client';
import { useMemo, useState } from 'react';
import ListingCard from '@/components/ListingCard';
import data from '@/data/listings.json';

export default function Filters(){
  const [q, setQ] = useState('');
  const [daMin, setDaMin] = useState(0);
  const [daMax, setDaMax] = useState(100);
  const [priceMax, setPriceMax] = useState(200000); // R$ 2000,00

  const filtered = useMemo(() => {
    return data.filter((l) => {
      const matchQ = q ? (l.domain.includes(q) || (l.description||'').toLowerCase().includes(q.toLowerCase())) : true;
      const matchDa = l.da >= daMin && l.da <= daMax;
      const matchPrice = l.priceCents <= priceMax;
      return matchQ && matchDa && matchPrice;
    });
  }, [q, daMin, daMax, priceMax]);

  return (
    <div className="container">
      <div className="card mb-6 grid md:grid-cols-4 gap-4">
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Buscar por domínio..." className="border rounded-xl px-3 py-2"/>
        <div>
          <label className="text-xs text-gray-500">DA mínimo</label>
          <input type="number" value={daMin} onChange={(e)=>setDaMin(parseInt(e.target.value||'0'))} className="w-full border rounded-xl px-3 py-2"/>
        </div>
        <div>
          <label className="text-xs text-gray-500">DA máximo</label>
          <input type="number" value={daMax} onChange={(e)=>setDaMax(parseInt(e.target.value||'100'))} className="w-full border rounded-xl px-3 py-2"/>
        </div>
        <div>
          <label className="text-xs text-gray-500">Preço máximo (R$)</label>
          <input type="number" value={(priceMax/100).toFixed(0)} onChange={(e)=>setPriceMax(parseInt(e.target.value||'0')*100)} className="w-full border rounded-xl px-3 py-2"/>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((l) => (
          <ListingCard key={l.domain} domain={l.domain} da={l.da} priceCents={l.priceCents} logo={l.logo} userAvatar={l.userAvatar} />
        ))}
      </div>
    </div>
  )
}
