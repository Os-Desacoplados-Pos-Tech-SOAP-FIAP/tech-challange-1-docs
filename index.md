---
layout: home

hero:
  name: "Oficina Mecânica"
  text: "Tech Challenge FIAP — Fase 1"
  tagline: Sistema de gestão de ordens de serviço com DDD, Clean Architecture e NestJS
  actions:
    - theme: brand
      text: Ver Fluxo Completo
      link: /fluxo-completo
    - theme: alt
      text: Script de Apresentação
      link: /apresentacao

features:
  - title: Arquitetura DDD
    details: Domain-Driven Design com Clean Architecture em 5 camadas — domain, application, infrastructure, modules e common. Sem dependências do framework na camada de domínio.
    icon: 🏗️
  - title: Fluxo de Ordens de Serviço
    details: 7 estados com transições controladas pelo domínio. Do recebimento ao diagnóstico, orçamento, aprovação, execução e entrega.
    icon: 🔧
  - title: Segurança e Qualidade
    details: Autenticação JWT, controle de acesso por perfil (RBAC), cobertura de testes de 80% e análise estática com SonarQube.
    icon: 🔒
  - title: Documentação e API
    details: Swagger/OpenAPI gerado automaticamente. Deploy com Docker Compose — banco + API com seed automático.
    icon: 📚
---

## Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Runtime | Node.js 20 + TypeScript 5 |
| Framework | NestJS 10 |
| Banco de Dados | PostgreSQL 16 + Prisma 5 |
| Autenticação | JWT + bcryptjs |
| Testes | Jest (unitário + E2E) |
| Containers | Docker + Docker Compose |
| Qualidade | SonarQube + OWASP ZAP |

## Perfis de Acesso

| Perfil | Responsabilidades |
|--------|------------------|
| **ADMINISTRADOR** | Gestão completa do sistema, cadastros e métricas |
| **ATENDENTE** | Abertura de OS, cadastro de clientes e veículos, orçamento |
| **MECÂNICO** | Execução e conclusão dos serviços na OS |
| **Público** | Aprovação/recusa de orçamento via token |

## Diagramas e Relatórios

- [DER — Diagrama Entidade-Relacionamento](/der)
- [SonarQube — Qualidade de Código](/sonarqube)
- [Relatório OWASP ZAP](/relatorio-zap.html) — análise de segurança da API
- [Scan Report](/scan-report.html) — varredura de vulnerabilidades
