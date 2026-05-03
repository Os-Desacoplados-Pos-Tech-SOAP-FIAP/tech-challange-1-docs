import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Oficina Mecânica',
  description: 'Documentação pública do sistema de oficina mecânica — Tech Challenge FIAP Fase 1',
  base: '/tech-challange-1-docs/',
  lang: 'pt-BR',

  head: [
    ['link', { rel: 'icon', href: '/tech-challange-1-docs/favicon.ico' }],
  ],

  themeConfig: {
    siteTitle: 'Oficina Mecânica — FIAP',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Fluxo Completo', link: '/fluxo-completo' },
      { text: 'Apresentação', link: '/apresentacao' },
      {
        text: 'Relatórios',
        items: [
          { text: 'Relatório OWASP ZAP', link: '/relatorio-zap.html', target: '_blank' },
          { text: 'Scan de Vulnerabilidades', link: '/scan-report.html', target: '_blank' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Documentação',
        items: [
          { text: 'Início', link: '/' },
          { text: 'Fluxo Completo da OS', link: '/fluxo-completo' },
          { text: 'Script de Apresentação', link: '/apresentacao' },
        ],
      },
      {
        text: 'Diagramas',
        items: [
          { text: 'DER — Diagrama Entidade-Relacionamento', link: '/der' },
          { text: 'SonarQube — Qualidade de Código', link: '/sonarqube' },
        ],
      },
      {
        text: 'Relatórios de Segurança',
        items: [
          { text: 'OWASP ZAP', link: '/relatorio-zap.html', target: '_blank' },
          { text: 'Scan Report', link: '/scan-report.html', target: '_blank' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hailtondeolinda/tech-challange-1' },
    ],

    footer: {
      message: 'Tech Challenge FIAP — Pós-Tech Software Architecture',
      copyright: 'Hailton Nascimento © 2025',
    },

    search: {
      provider: 'local',
    },
  },
})
