export default function PrecosPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Preços</h1>
          <p className="muted mt-2">Planos transparentes para todos os perfis</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card text-center">
            <h3 className="font-semibold text-lg mb-2">Gratuito</h3>
            <div className="text-3xl font-bold mb-4">R$ 0<span className="text-sm font-normal">/mês</span></div>
            <ul className="space-y-2 text-sm mb-6">
              <li>✓ 1 backlink grátis</li>
              <li>✓ Acesso ao marketplace</li>
              <li>✓ Suporte por email</li>
            </ul>
            <a href="/cadastrar" className="btn btn-outline w-full">Começar Grátis</a>
          </div>
          
          <div className="card text-center border-2 border-black">
            <div className="bg-black text-white text-xs px-3 py-1 rounded-full inline-block mb-3">Mais Popular</div>
            <h3 className="font-semibold text-lg mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-4">R$ 97<span className="text-sm font-normal">/mês</span></div>
            <ul className="space-y-2 text-sm mb-6">
              <li>✓ Tudo do plano gratuito</li>
              <li>✓ Análise de DA/DR</li>
              <li>✓ Relatórios detalhados</li>
              <li>✓ Suporte prioritário</li>
            </ul>
            <a href="/cadastrar" className="btn btn-primary w-full">Assinar Pro</a>
          </div>
          
          <div className="card text-center">
            <h3 className="font-semibold text-lg mb-2">Agência</h3>
            <div className="text-3xl font-bold mb-4">R$ 297<span className="text-sm font-normal">/mês</span></div>
            <ul className="space-y-2 text-sm mb-6">
              <li>✓ Tudo do plano Pro</li>
              <li>✓ Múltiplos usuários</li>
              <li>✓ API de integração</li>
              <li>✓ Gerente dedicado</li>
            </ul>
            <a href="/cadastrar" className="btn btn-outline w-full">Falar com Vendas</a>
          </div>
        </div>
      </div>
    </div>
  );
}