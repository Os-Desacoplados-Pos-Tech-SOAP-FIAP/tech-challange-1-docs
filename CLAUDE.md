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

## Deploy

Push para `main` → GitHub Actions roda automaticamente → publica em GitHub Pages.

O campo `base` em `config.ts` está definido como `/tech-challange-1-docs/` — **não remova**, é obrigatório para o subpath do GitHub Pages funcionar.

## Atualizar conteúdo do projeto original

Os arquivos de conteúdo foram copiados de `../tech_challange_1/docs/`. Para sincronizar manualmente:

```powershell
$src = "..\tech_challange_1\docs"
Copy-Item "$src\apresentacao.md" ".\apresentacao.md" -Force
Copy-Item "$src\fluxo-completo.md" ".\fluxo-completo.md" -Force
Copy-Item "$src\DER.png" ".\public\DER.png" -Force
Copy-Item "$src\DER.png" ".\DER.png" -Force
Copy-Item "$src\SonarQube-*.png" ".\public\" -Force
Copy-Item "$src\SonarQube-*.png" ".\" -Force
Copy-Item "$src\relatorio-zap.html" ".\public\" -Force
Copy-Item "$src\scan-report.html" ".\public\" -Force
```
