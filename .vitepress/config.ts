import { defineConfig } from 'vitepress';

export default defineConfig({
   title: 'Oficina Mecânica',
   description:
      'Documentação pública do sistema de oficina mecânica — Tech Challenge FIAP Fase 1',
   base: '/tech-challange-1-docs/',
   lang: 'pt-BR',

   head: [['link', { rel: 'icon', href: '/tech-challange-1-docs/favicon.ico' }]],

   themeConfig: {
      siteTitle: 'Oficina Mecânica — FIAP',

      nav: [
         { text: 'Início', link: '/' },
         { text: 'Fluxo Completo', link: '/fluxo-completo' },
         {
            text: 'Relatórios',
            items: [
               { text: 'SonarQube — Qualidade de Código', link: '/sonarqube' },
               { text: 'Relatório OWASP ZAP', link: '/relatorio-zap' },
               { text: 'Scan de Vulnerabilidades', link: '/scan-report' },
            ],
         },
      ],

      sidebar: [
         {
            text: 'Documentação',
            items: [
               { text: 'Início', link: '/' },
               { text: 'Fluxo Completo da OS', link: '/fluxo-completo' },
            ],
         },
         {
            text: 'Diagrama',
            items: [{ text: 'DER — Diagrama Entidade-Relacionamento', link: '/der' }],
         },
         {
            text: 'Relatórios',
            items: [
               { text: 'SonarQube — Qualidade de Código', link: '/sonarqube' },
               { text: 'OWASP ZAP', link: '/relatorio-zap' },
               { text: 'Scan Report', link: '/scan-report' },
            ],
         },
      ],

      socialLinks: [
         {
            icon: 'github',
            link: 'https://github.com/Os-Desacoplados-Pos-Tech-SOAP-FIAP/tech-challange-1-docs',
         },
      ],

      footer: {
         message: 'Tech Challenge FIAP — Pós-Tech Software Architecture',
         copyright: 'Os Desacoplados © 2026',
      },
   },
});
