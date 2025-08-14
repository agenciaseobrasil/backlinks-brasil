export default function EntrarPage() {
  return (
    <div className="section">
      <div className="container max-w-md mx-auto">
        <div className="card">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Entrar</h1>
            <p className="muted mt-2">Acesse sua conta</p>
          </div>
          
          <form className="space-y-4">
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
            
            <button type="submit" className="btn btn-primary w-full">
              Entrar
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm muted">
              Não tem conta? <a href="/cadastrar" className="underline">Cadastre-se</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}