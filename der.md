# DER — Diagrama Entidade-Relacionamento

Diagrama que representa a estrutura das entidades e seus relacionamentos no banco de dados PostgreSQL.

![Diagrama Entidade-Relacionamento](/DER.png)

## Entidades Principais

- **Cliente** — dados pessoais e de contato do proprietário do veículo
- **Veiculo** — vinculado ao cliente; identificado por placa e modelo
- **OrdemDeServico** — agregado raiz; reúne diagnóstico, itens de orçamento e execuções
- **ItemOrcamento** — serviços e insumos estimados no orçamento
- **ExecucaoDeServico** — registro de execução por mecânico, com valor cobrado
- **Servico** — catálogo de serviços disponíveis
- **Insumo** — catálogo de insumos utilizados nas execuções
- **Usuario** — perfis ADMINISTRADOR, ATENDENTE e MECANICO
