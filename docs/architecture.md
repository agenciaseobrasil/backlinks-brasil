# Arquitetura inicial

Este documento descreve a stack proposta e os blocos essenciais para o produto de backlinks, cobrindo autenticação, modelagem de dados, SEO, moderação, analytics e deploy.

## Stack

- **Frontend:** Next.js (App Router) com React, Tailwind CSS e componentes server/client conforme necessidade.
- **Backend:** API integrada ao App Router via rotas (Route Handlers) ou futura extração para NestJS/Express se for necessário desacoplamento.
- **Autenticação:** NextAuth.js com JWT (stateless) e opção de sessões persistentes; suporte a e-mail/senha e futuros provedores OAuth (Google/Microsoft). Tokens de acesso assinam payload mínimo (sub, role, companyIds) e refrescam a cada login.
- **ORM:** Prisma com PostgreSQL. Migrations versionadas via `prisma migrate` e seed opcional para perfis demo/admin.
- **Storage:** Provedores S3-compatíveis ou Cloudinary para logos e mídia de artigos.
- **Observabilidade:** Logs estruturados (pino/console), métricas Prometheus/OpenTelemetry exportáveis, e trilhas de auditoria mínimas para ações de moderação.

## Módulos principais

### Autenticação e autorização
- Fluxo de **signup/login** com validação de senha, proteção anti-bruteforce e opção de verificação de e-mail (token de verificação com expiração curta).
- Middlewares para painel protegendo rotas por papel (`ADMIN`, `OWNER`) e vínculo com empresas que o usuário possui.
- Rate limiting aplicado em formulários públicos (signup, contato) via solução em memória/Redis.

### Modelagem de dados
- **users:** proprietários e admins.
- **companies:** dados de negócio, endereço, contato, status de aprovação.
- **categories / company_categories:** associação N:N entre empresas e categorias.
- **articles:** posts do painel com status (rascunho/publicado), slug estável, noindex para rascunhos e datas de publicação.
- **links:** URLs externas apontando para o site principal da empresa, associadas a artigos para rastrear cliques.
- **media:** uploads de imagem opcionais (logo, imagens de artigo) com provedor e metadados.
- **analytics_event:** registro simplificado de page views/cliques por empresa/artigo/link.

### Fluxos do painel
- **Dashboard:** sumariza visualizações/cliques por empresa e artigo, top links e evolução semanal.
- **CRUD Empresa:** nome, descrição, site, contato, endereço, horário, logo; upload via storage e geração de thumbnails.
- **CRUD Categorias (admin):** criação/edição com slug único, opção de destaque.
- **CRUD Artigos:** editor markdown/WYSIWYG, status, slug amigável, links internos para o site da empresa, controle de noindex e preview público.
- **Moderação:** fila opcional para aprovar novas empresas/artigos antes de publicar; histórico de auditoria.

### Listagem pública e SEO
- Páginas por categoria e busca text/filtros (categoria, cidade, status).
- Página de empresa com dados, artigos e links.
- SEO técnico: metatags dinâmicas, schema.org `Organization/LocalBusiness`, sitemap.xml e robots.txt, canonical por slug e `noindex` para rascunhos.
- Paginação server-side e limites para crawlers; slugs imutáveis após publicação.

### Analytics
- Registro de page views e cliques nos links com `analytics_event`, armazenando `userAgent`, `ipHash` e `referrer` mínimos.
- Métricas exportáveis para dashboards (ex.: Prometheus/Grafana ou serviço gerenciado).

### Pagamentos (opcional)
- Planos free/premium com limites de artigos, destaques e posicionamento por categoria.
- Integração com Stripe/Pagar.me para cobrança recorrente e webhooks de status de assinatura.

### Deploy e infraestrutura
- Containerização via Docker; pipelines de CI/CD para dev/stage/prod.
- HTTPS, CDN para assets, backups automatizados do banco e rotação de secrets.
- Variáveis sensíveis via `.env` e secret managers.

## Próximos passos recomendados
1. Configurar `NextAuth` com credenciais (e-mail/senha) e provider OAuth opcional.
2. Criar rotas protegidas para o painel e serviços públicos (categoria/empresa/artigo).
3. Implementar uploads de logo/imagem (API) com validação de tipo/tamanho e sanitização de HTML do editor.
4. Adicionar rate limiting em rotas públicas e logs estruturados para moderação/analytics.
5. Conectar pipelines de deploy e monitoramento (healthcheck, métricas e alertas).
