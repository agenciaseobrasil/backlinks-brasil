export default function CadastrarPage() {
  return (
    <div className="section">
      <div className="container max-w-md mx-auto">
        <div className="card">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Cadastrar</h1>
            <p className="muted mt-2">Crie sua conta e ganhe 1 backlink grátis</p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome completo</label>
              <input 
                type="text" 
                className="w-full border rounded-xl px-3 py-2"
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full border rounded-xl px-3 py-2"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Senha</label>
              <input 
                type="password" 
                className="w-full border rounded-xl px-3 py-2"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Tipo de conta</label>
              <select className="w-full border rounded-xl px-3 py-2">
                <option>Comprador de backlinks</option>
                <option>Vendedor de backlinks</option>
                <option>Ambos</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Criar Conta
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm muted">
              Já tem conta? <a href="/entrar" className="underline">Faça login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}