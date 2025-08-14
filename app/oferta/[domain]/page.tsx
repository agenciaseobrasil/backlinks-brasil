import { notFound } from 'next/navigation';
import listings from '@/data/listings.json';

type Props = {
  params: { domain: string };
};

export default function OfertaPage({ params }: Props) {
  const domain = decodeURIComponent(params.domain);
  const listing = listings.find(l => l.domain === domain);
  
  if (!listing) {
    notFound();
  }

  const price = (listing.priceCents / 100).toLocaleString("pt-BR", { 
    style: "currency", 
    currency: "BRL" 
  });

  return (
    <div className="section">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              {listing.logo ? (
                <img src={listing.logo} alt="logo" className="w-12 h-12 rounded"/>
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded"/>
              )}
              <div>
                <h1 className="text-2xl font-bold">{listing.domain}</h1>
                <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">DA {listing.da}</span>
              </div>
            </div>
            
            <div className="card mb-6">
              <h3 className="font-semibold mb-3">Detalhes da Oferta</h3>
              <p className="mb-4">{listing.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Domain Authority:</span>
                  <span className="font-medium">{listing.da}</span>
                </div>
                <div className="flex justify-between">
                  <span>Preço:</span>
                  <span className="font-medium text-lg">{price}</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="font-semibold mb-3">Sobre o Vendedor</h3>
              <div className="flex items-center gap-3">
                {listing.userAvatar && (
                  <img 
                    src={listing.userAvatar} 
                    alt="vendedor" 
                    className="w-12 h-12 rounded-full"
                  />
                )}
                <div>
                  <div className="font-medium">Vendedor Verificado</div>
                  <div className="text-sm muted">⭐⭐⭐⭐⭐ (4.8/5)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="card sticky top-4">
              <h3 className="font-semibold mb-4">Iniciar Negociação</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Seu site/URL</label>
                  <input 
                    type="url" 
                    className="w-full border rounded-xl px-3 py-2"
                    placeholder="https://seusite.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Anchor text desejado</label>
                  <input 
                    type="text" 
                    className="w-full border rounded-xl px-3 py-2"
                    placeholder="palavra-chave"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Mensagem (opcional)</label>
                  <textarea 
                    className="w-full border rounded-xl px-3 py-2 h-24"
                    placeholder="Detalhes adicionais sobre sua proposta..."
                  />
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  Enviar Proposta
                </button>
              </form>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                Ao enviar, você concorda com nossos termos de uso
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}