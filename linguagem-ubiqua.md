---
title: Linguagem Ubíqua
---

# 📖 Linguagem Ubíqua — Sistema de Gestão de Oficina Mecânica

**Tech Challenge — Pós-Tech FIAP | Software Architecture Fase 1**
Domínio: Gestão de Atendimento e Execução de Serviços Automotivos

---

## 👥 Atores do Sistema

| Termo | Definição |
|-------|-----------|
| **Cliente** | Pessoa física (CPF) ou pessoa jurídica (CNPJ) que solicita serviços para seu veículo. É o titular da Ordem de Serviço e responsável pela aprovação do orçamento. |
| **Cliente PF** | Cliente identificado por CPF. Pessoa física proprietária do veículo. |
| **Cliente PJ** | Cliente identificado por CNPJ. Empresa proprietária do veículo. Pode ter múltiplos veículos cadastrados. |
| **Atendente** | Funcionário da oficina responsável por receber o cliente, cadastrar veículo e serviços solicitados, e gerenciar o ciclo da OS. |
| **Mecânico** | Funcionário técnico da oficina que realiza o diagnóstico e executa os serviços. Atualiza o status da OS, registra peças consumidas e tempo de execução. |
| **Administrador** | Usuário com acesso total ao sistema. Responsável pela gestão de cadastros, relatórios e monitoramento geral. |

---

## 🚗 Veículo e Cliente

| Termo | Definição |
|-------|-----------|
| **Veículo** | Automóvel cadastrado no sistema vinculado a um Cliente. Identificado pela placa. |
| **Placa** | Identificador único do veículo no sistema. Formato padrão brasileiro (Mercosul ou antigo). |
| **Marca** | Fabricante do veículo (ex: Toyota, Chevrolet, Ford). |
| **Modelo** | Denominação comercial do veículo (ex: Corolla, Onix, Ka). |
| **Ano** | Ano de fabricação do veículo. |
| **Histórico do Veículo** | Registro de todas as Ordens de Serviço já realizadas para um determinado veículo. |

---

## 📋 Orçamento

| Termo | Definição |
|-------|-----------|
| **Orçamento** | Projeção de custo calculada automaticamente pelo sistema a partir dos serviços e peças associados à OS. Não é uma entidade separada — é uma visão financeira da OS enviada ao Cliente para aprovação. Gerado pelo Mecânico após o diagnóstico. |
| **Item de Orçamento** | Cada linha do orçamento, composta por um serviço ou peça com seu respectivo valor unitário e quantidade. |
| **Valor Estimado** | Soma total calculada automaticamente pelo sistema com base nos serviços e peças incluídos no orçamento. |
| **Aprovação do Orçamento** | Ação do Cliente de aceitar o orçamento, autorizando a execução dos serviços. Altera o status da OS de "Aguardando aprovação" para "Em execução". |
| **Recusa do Orçamento** | Ato do Cliente de rejeitar o orçamento proposto. A recusa é sempre total — a OS passa para o status "Reprovada" e as reservas de insumo são liberadas automaticamente. Não há fluxo de revisão ou recusa parcial. |

---

## 🔧 Ordem de Serviço (OS)

| Termo | Definição |
|-------|-----------|
| **Ordem de Serviço (OS)** | Documento formal criado pelo Atendente no momento da abertura do atendimento, registrando cliente, veículo e serviços solicitados. É o agregado central do domínio — o Orçamento é uma projeção dela, não uma entidade que a precede. |
| **Número da OS** | Identificador único e sequencial da Ordem de Serviço. |
| **Status da OS** | Estado atual da Ordem de Serviço no ciclo de atendimento. |
| **Abertura da OS** | Momento em que o Atendente registra os serviços solicitados pelo Cliente e cria a OS com status "Recebida". |
| **Encerramento da OS** | Momento em que o veículo é entregue ao cliente e a OS passa para o status "Entregue". |
| **Tempo de Execução** | Duração registrada entre o início e o fim da execução de um serviço por um Mecânico. Usado para monitoramento de desempenho. |

---

## 🔄 Ciclo de Status da OS

| Status | Definição |
|--------|-----------|
| **Recebida** | Status inicial da OS no momento da criação. Aguardando início do diagnóstico pelo Mecânico. |
| **Em Diagnóstico** | Mecânico está avaliando o veículo para confirmar os serviços necessários e identificar possíveis problemas adicionais. |
| **Aguardando Aprovação** | Diagnóstico identificou serviços adicionais. Orçamento enviado ao Cliente para aprovação. |
| **Aprovada** | Cliente aprovou o orçamento. Aguardando início da execução pelo Mecânico. |
| **Recusada** | Cliente recusou o orçamento. OS encerrada sem execução. Reservas de insumo liberadas automaticamente. |
| **Em Execução** | Serviços aprovados (iniciais e/ou adicionais) estão sendo executados pelo Mecânico. |
| **Finalizada** | Todos os serviços foram concluídos. Veículo pronto para entrega. |
| **Entregue** | Veículo devolvido ao cliente. OS encerrada. |

---

## 🛠️ Serviços

| Termo | Definição |
|-------|-----------|
| **Serviço** | Atividade técnica oferecida pela oficina (ex: Troca de óleo, Alinhamento, Balanceamento). Possui nome, descrição e valor padrão. |
| **Serviço Solicitado / Item de Orçamento** | Serviço ou insumo incluído pelo Atendente ou Mecânico no orçamento da OS. Pode ser adicionado enquanto a OS estiver nos status Recebida, Em Diagnóstico ou Aguardando Aprovação. Após a aprovação do orçamento, não é possível adicionar novos itens. |
| **Execução de Serviço** | Registro da realização de um serviço por um Mecânico, contendo tempo de início, fim e observações técnicas. |

---

## 🔩 Peças e Insumos

| Termo | Definição |
|-------|-----------|
| **Insumo** | Material ou componente utilizado na execução de um serviço. Inclui tanto componentes físicos (ex: filtro de óleo, pastilha de freio) quanto materiais consumíveis (ex: óleo de motor, fluido de freio). No sistema não há distinção técnica entre os dois — ambos são gerenciados como Insumo no controle de estoque. |
| **Estoque** | Quantidade disponível de cada peça ou insumo no almoxarifado da oficina. |
| **Baixa de Estoque** | Redução automática da quantidade em estoque executada pelo sistema quando a OS transita para o status "Finalizada". Não ocorre item a item durante a execução. |
| **Peça Utilizada** | Peça ou insumo efetivamente consumido durante a execução de um serviço, registrado pelo Mecânico. |

---

## 🔐 Segurança e Acesso

| Termo | Definição |
|-------|-----------|
| **Autenticação** | Processo de verificação de identidade de um usuário no sistema via JWT. |
| **Token JWT** | Credencial digital gerada no login, utilizada para autorizar o acesso às APIs administrativas. |
| **Perfil de Acesso** | Conjunto de permissões atribuído a um usuário (Administrador, Atendente, Mecânico). |
| **API Pública** | Endpoint acessível pelo Cliente sem autenticação, usado exclusivamente para consulta de status da OS. |
| **API Administrativa** | Endpoint restrito a usuários autenticados via JWT (Atendente, Mecânico, Administrador). |

---

## ⚠️ Termos Ambíguos — Atenção

| Termo | Risco de Ambiguidade | Definição Adotada |
|-------|----------------------|-------------------|
| **Aprovação** | Pode ser a aprovação do Orçamento, ou uma aprovação interna do administrador | Neste sistema: sempre se refere à aprovação de um orçamento pelo Cliente. |
| **Orçamento** | A OS é criada primeiro. O orçamento é uma projeção dos itens da OS, apresentada ao Cliente após o diagnóstico. | Nunca referenciar o Orçamento como OS ao se comunicar com o Cliente. |
| **Status** | Pode se referir ao status da OS ou ao status de uma peça no estoque | Neste sistema: "Status" sem complemento = Status da OS; para peças usa-se "disponibilidade". |
| **Cliente** | Pode ser o cliente final (dono do carro) ou um sistema cliente (consumer de API) | Neste sistema: "Cliente" = pessoa física ou jurídica dona do veículo. |
| **Serviço** | Pode ser o cadastro do tipo de serviço OU a execução concreta em uma OS | Diferenciamos: "Serviço" (cadastro) vs "Execução de Serviço" (realização na OS). |

---

## 🔁 Termos Sinônimos — Padronização Adotada

| Evitar | Usar | Motivo |
|--------|------|--------|
| "Nota de serviço", "Ficha" | **Ordem de Serviço (OS)** | Termo oficial do domínio |
| "Carro", "Automóvel" | **Veículo** | Mais abrangente e preciso |
| "Funcionário", "Colaborador" | **Atendente** ou **Mecânico** | Especifica o papel no domínio |
| "Produto", "Material" | **Peça** ou **Insumo** | Distingue componentes físicos de consumíveis |
