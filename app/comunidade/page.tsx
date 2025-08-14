export default function ComunidadePage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Comunidade</h1>
          <p className="muted mt-2">Conecte-se com outros profissionais de SEO e link building</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-semibold text-lg mb-3">Discord</h3>
            <p className="muted mb-4">Participe das discussões em tempo real com a comunidade</p>
            <a href="#" className="btn btn-primary">Entrar no Discord</a>
          </div>
          
          <div className="card">
            <h3 className="font-semibold text-lg mb-3">Fórum</h3>
            <p className="muted mb-4">Faça perguntas e compartilhe experiências</p>
            <a href="#" className="btn btn-outline">Acessar Fórum</a>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="section-title text-center mb-8">Membros em Destaque</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card text-center">
                <img 
                  src={`/demo/u${i}.jpg`} 
                  alt={`Membro ${i}`}
                  className="w-16 h-16 rounded-full mx-auto mb-3"
                />
                <h4 className="font-semibold">Membro {i}</h4>
                <p className="text-sm muted">Especialista em SEO</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}