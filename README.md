# TechOS Core - Sprint Express

## 1. User Stories (INVEST)
* **US01:** "Como técnico, quero abrir uma Ordem de Serviço para registrar um conserto."
  * **C.A.01:** Deve validar o ID do cliente.
  * **C.A.02:** O status inicial deve ser sempre 'ABERTA'.
* **US02:** "Como cliente, quero visualizar o status do meu equipamento."

## 2. Requisitos Não-Funcionais (RNF)
* **RNF01 (Segurança):** Sanitização de inputs contra XSS/OWASP no cadastro.
* **RNF02 (Desempenho):** Tempo de resposta na criação de chamados < 2s.

## 3. Diagrama de Classes (Mermaid)
```mermaid
classDiagram
    class Usuario {
        <<Abstrata>>
        +int id
        +string nome
        +string email
        +getId()
        +getNome()
        +getEmail()
    }
    class Cliente {
        +string telefone
    }
    class Tecnico {
        +string especialidade
    }
    class OrdemServico {
        +int id
        +Cliente cliente
        +string status
        +string descricao
    }
    Usuario <|-- Cliente
    Usuario <|-- Tecnico
    OrdemServico --> Cliente


# DOCUMENTAÇÃO DE UI/UX E COMPONENTES (SPRINT 3)

## 1. ARQUITETURA DA INFORMAÇÃO E DASHBOARD
- **Painel Superior:** Exibe totalizadores e métricas consumidas diretamente do GerenciadorOS (Singleton).
- **Formulário Lateral:** Responsável pelo cadastro de novos usuários e chamados, acionando a UsuarioFactory[cite: 4].
- **Tabela Central:** Lista dinâmica, estruturada e filtrável de Ordens de Serviço[cite: 4].

## 2. COMPONENTES UI
- **StatusBadge:** Indicadores visuais de estado com código de cores (Amarelo para ABERTA, Azul para EM ANDAMENTO, Verde para CONCLUÍDA)[cite: 4].
- **UserCard:** Componente modular para exibição do avatar e dados dos Clientes ou Técnicos instanciados[cite: 4].

## 3. CHECKLIST DE ACESSIBILIDADE (WCAG)
- [x] Contraste mínimo de cores de 4.5:1 aplicado nas tabelas e badges de status[cite: 4].
- [x] Suporte completo à navegação por teclado (TAB) em todos os campos de formulário e botões[cite: 4].
- [x] Atribuição de rótulos ARIA (`aria-label`) para as ações de alteração de estado das OS[cite: 4].
