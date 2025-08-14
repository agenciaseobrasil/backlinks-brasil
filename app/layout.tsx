import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backlinks Brasil — Compre e venda Backlinks de qualidade",
  description: "Marketplace + guia comercial para compra, venda e troca de backlinks e guest posts.",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="border-b">
          <div className="container py-4 flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Backlinks Brasil" className="w-8 h-8"/>
              <span className="font-semibold">Backlinks Brasil</span>
            </a>
            <nav className="ml-auto hidden md:flex gap-6 text-sm">
              <a href="/dominios">Domínios</a>
              <a href="/comunidade">Comunidade</a>
              <a href="/blog">Blog</a>
              <a href="/precos">Preços</a>
            </nav>
            <div className="ml-auto md:ml-0 flex gap-2">
              <a className="btn btn-outline" href="/entrar">Entrar</a>
              <a className="btn btn-primary" href="/cadastrar">Cadastrar</a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-12 border-t">
          <div className="container py-10 grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <img src="/logo.svg" alt="logo" className="w-10 h-10"/>
              <p className="muted text-sm">Plataforma brasileira para compra, venda e troca de backlinks com transparência.</p>
            </div>
            <div>
              <div className="font-semibold mb-3">Guia</div>
              <ul className="space-y-2 text-sm">
                <li><a href="/">Home</a></li>
                <li><a href="/comunidade">Comunidade</a></li>
                <li><a href="/dominios">Domínios</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/precos">Preços</a></li>
                <li><a href="/legal/privacidade">Privacidade</a></li>
                <li><a href="/legal/termos">Termos</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Contato</div>
              <div className="text-sm space-y-2">
                <div>Email: contato@backlinksbrasil.com.br</div>
                <div>WhatsApp: (11) 99999-9999</div>
                <div className="flex gap-2">
                  <a className="btn btn-outline" href="/entrar">Login</a>
                  <a className="btn btn-outline" href="/cadastrar">Cadastro</a>
                </div>
              </div>
              <div className="mt-6 text-xs text-gray-500">Parceria com <b>Agência SEO Brasil</b> e <b>Udemy</b>. Avaliação média
                <span title="5 estrelas" aria-label="5 estrelas"> ⭐⭐⭐⭐⭐</span> por nossos usuários.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
