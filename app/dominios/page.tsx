import Filters from '@/components/Filters';

export default function DominiosPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Domínios Disponíveis</h1>
          <p className="muted mt-2">Explore todas as oportunidades de backlinks disponíveis</p>
        </div>
        <Filters />
      </div>
    </div>
  );
}