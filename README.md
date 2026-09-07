# Mundo Pet - Agendamento para Petshop 🐾

> 🚧 **Projeto em desenvolvimento** 🚧
> Esta aplicação está atualmente na fase inicial de estruturação e desenvolvimento. Os requisitos e funcionalidades descritos abaixo representam o escopo em construção.

---

## 📌 Sobre o Projeto

O **Mundo Pet** é uma aplicação web responsiva voltada para o agendamento de serviços em petshops. O objetivo do sistema é permitir que o usuário visualize a agenda diária de atendimentos, adicione novos compromissos e gerencie os agendamentos existentes de forma simples e intuitiva, com layout adaptado tanto para telas desktop quanto para dispositivos móveis.

---

## 🎯 Funcionalidades Planejadas

### 📅 Visualização da Agenda

- **Filtro por Data:** Seleção de data no topo da tela para alternar os agendamentos exibidos.
- **Organização por Período:** Agendamentos agrupados por seções (Manhã, Tarde e Noite), contendo ícone, nome e horário de cada período.
- **Cards de Atendimento:** Exibição do horário, nome do pet, nome do tutor, descrição do serviço e opção para remoção.

### 📝 Modal de Agendamento ("Novo Agendamento")

- Abertura de janela modal interativa com bloqueio de fundo e foco inicial no primeiro campo.
- Formulario com os seguintes campos:
  - Nome do tutor
  - Nome do pet
  - Telefone
  - Descrição do serviço
  - Data
  - Hora
- Confirmação do agendamento com fechamento automático do modal.

### ⚙️ Regras de Negócio e Comportamentos

- **Ordenação Automática:** Inclusão do novo card na seção correta (Manhã/Tarde/Noite) em ordem cronológica.
- **Prevenção de Conflitos:** Bloqueio de agendamentos duplicados no mesmo horário e data.
- **Validação de Horários:** Restrição de agendamentos fora das janelas de atendimento válidas.
- **Validação de Formulário:** Bloqueio de envio de campos vazios/inválidos com feedbacks claros para o usuário.
- **Remoção Instantânea:** Exclusão imediata do agendamento selecionado da interface.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da aplicação.
- **CSS3:** Estilização responsiva e layouts (Flexbox/Grid).
- **JavaScript (ES6+):** Manipulação da DOM, validações e regras de negócio.

---

## 💻 Como Rodar o Projeto (Em Breve)

Como o repositório ainda está em fase de construção, as instruções completas de execução e deploy serão atualizadas em breve.

# Clonar o repositório

```bash
git clone [https://github.com/seu-usuario/mundo-pet.git](https://github.com/seu-usuario/mundo-pet.git)
```

# Entrar na pasta do projeto

```bash
cd mundo-pet
```

---

## 🎨 Créditos

- **Desenvolvimento:** Implementação completa do código realizada por **Victor Martins**.
