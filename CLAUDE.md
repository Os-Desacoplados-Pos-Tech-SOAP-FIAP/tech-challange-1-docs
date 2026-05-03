# CLAUDE.md

## O que é este projeto

Site de documentação pública do sistema de oficina mecânica (Tech Challenge FIAP Fase 1), gerado com **VitePress** e publicado via **GitHub Pages**.

Repositório fonte do sistema: `../tech_challange_1/`

## Comandos

```bash
npm run docs:dev      # servidor local em http://localhost:5173/tech-challange-1-docs/
npm run docs:build    # gera o site em .vitepress/dist/
npm run docs:preview  # preview do build em http://localhost:4173/tech-challange-1-docs/
```

## Estrutura

```
/                         ← raiz = páginas do site (markdown)
├── index.md              # home page (layout: home com hero section)
├── apresentacao.md       # script de apresentação em vídeo
├── fluxo-completo.md     # guia passo a passo do fluxo da OS
├── der.md                # DER com imagem embutida
├── sonarqube.md          # relatórios SonarQube
├── .vitepress/
│   └── config.ts         # navegação, sidebar, base URL, busca local
└── public/               # arquivos estáticos (imagens, HTMLs dos relatórios ZAP)
```

## Como adicionar uma nova página

1. Criar `nome-da-pagina.md` na raiz
2. Adicionar à `sidebar` e/ou `nav` em `.vitepress/config.ts`

## Publicar no GitHub Pages (primeira vez)

O repositório ainda não tem remote configurado. Para publicar:

**1. Criar o repositório público no GitHub**

Acesse github.com → New repository → nome: `tech-challange-1-docs` → Public → **não** inicialize com README.

**2. Atualizar o link do repositório no config**

Editar `.vitepress/config.ts` e substituir o placeholder em `socialLinks` pelo URL real:

```ts
socialLinks: [
  { icon: 'github', link: 'https://github.com/SEU_USUARIO/tech-challange-1-docs' },
],
```

**3. Conectar o remote e fazer push**

```powershell
git remote add origin https://github.com/SEU_USUARIO/tech-challange-1-docs.git
git push -u origin main
```

**4. Ativar GitHub Pages**

No repositório GitHub: Settings → Pages → Source: **GitHub Actions** → Save.

O GitHub Actions roda automaticamente a cada push e publica o site em:
`https://SEU_USUARIO.github.io/tech-challange-1-docs/`

---

## Deploy contínuo (após publicação)

Push para `main` → GitHub Actions roda automaticamente → publica em GitHub Pages.

O campo `base` em `config.ts` está definido como `/tech-challange-1-docs/` — **não remova**, é obrigatório para o subpath do GitHub Pages funcionar.

## Atualizar conteúdo do projeto original

Os arquivos de conteúdo foram copiados de `../tech_challange_1/docs/`. Para sincronizar manualmente:

```powershell
$src = "..\tech_challange_1\docs"
Copy-Item "$src\apresentacao.md" ".\apresentacao.md" -Force
Copy-Item "$src\fluxo-completo.md" ".\fluxo-completo.md" -Force
Copy-Item "$src\DER.png" ".\public\DER.png" -Force
Copy-Item "$src\SonarQube-*.png" ".\public\" -Force
Copy-Item "$src\relatorio-zap.html" ".\public\" -Force
Copy-Item "$src\scan-report.html" ".\public\" -Force
```
