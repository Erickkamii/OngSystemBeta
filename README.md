
# Sistema de ONGs e Voluntários

Este projeto é uma aplicação para o gerenciamento de ONGs, voluntários, doações, eventos e habilidades, permitindo o cadastro, visualização e gerenciamento dos dados dessas entidades e suas interações. A aplicação facilita a gestão de dados essenciais para organizações e voluntários.

## Funcionalidades

- **Cadastro de ONGs**: Cadastro de informações de ONGs, incluindo nome, endereço, telefone e descrição.
- **Cadastro de Voluntários**: Cadastro de voluntários, incluindo informações como nome, CPF e dados de contato.
- **Cadastro de Doações**: Cadastro de doações realizadas por voluntários para ONGs, incluindo valor e data.
- **Cadastro de Eventos**: Cadastro de eventos organizados pelas ONGs, com detalhes sobre data, local e descrição.
- **Cadastro de Habilidades**: Cadastro de habilidades dos voluntários para associar com os eventos ou outras necessidades.
- **Associação Voluntário-Habilidade**: Associa voluntários com habilidades específicas.
- **Cadastro de Usuários**: Cadastro de usuários, com login e senha para gerenciar as entidades.

## Tecnologias Utilizadas

### Frontend

- **React**: Framework JavaScript para a construção da interface do usuário.
- **Ant Design**: Biblioteca de componentes React para a criação da interface de usuário (UI).
- **CSS**: Estilização personalizada para o layout da aplicação.
- **State Management**: Utilização do `useState` para gerenciar o estado da aplicação.

### Backend

- **Spring Boot**: Framework Java para o backend da aplicação.
- **Spring Data JPA**: Utilizado para o acesso e gerenciamento das entidades no banco de dados.
- **H2**: Banco de dados relacional em memória utilizado para o desenvolvimento e testes.

## Estrutura das Entidades

### 1. **Usuário**
- **id**: Identificador único do usuário.
- **telefone**: Número de telefone do usuário.
- **endereco**: Endereço do usuário.
- **nome**: Nome do usuário.
- **email**: E-mail do usuário.
- **senha**: Senha do usuário.

#### Subclasses:
- **ONG**
  - **id**: Identificador único da ONG.
  - **id_usuario**: Referência ao usuário (herdado da classe Usuário).
  - **cnpj**: CNPJ da ONG.
  - **descricao**: Descrição da ONG.
  
- **Voluntário**
  - **id**: Identificador único do voluntário.
  - **id_usuario**: Referência ao usuário (herdado da classe Usuário).
  - **cpf**: CPF do voluntário.

### 2. **Doação**
- **id**: Identificador único da doação.
- **id_ong**: Referência à ONG que recebe a doação.
- **id_voluntario**: Referência ao voluntário que fez a doação.
- **valor**: Valor da doação.
- **dataDoacao**: Data da doação.

### 3. **Evento**
- **data**: Data do evento.
- **id_voluntario**: Referência ao voluntário que participou.
- **id_ong**: Referência à ONG que criou o evento.
- **titulo**: Título do evento.
- **estado**: Estado onde o evento ocorrerá.
- **cidade**: Cidade do evento.
- **descricao**: Descrição do evento.
- **periodo**: Período do evento.

### 4. **Habilidade**
- **id**: Identificador único da habilidade.
- **descricao**: Descrição da habilidade (ex: "Programação", "Cozinha").

### 5. **Voluntário-Habilidade**
- **id_voluntario**: Referência ao voluntário que possui a habilidade.
- **id_habilidade**: Referência à habilidade que o voluntário possui.
- **nivel**: Nível da habilidade (ex: iniciante, intermediário, avançado).

## Como Rodar o Projeto

### Pré-requisitos

1. **Node.js**: Instale o Node.js no seu ambiente local [Node.js official site](https://nodejs.org/).
2. **npm**: Instale o npm, que é o gerenciador de pacotes do Node.js.
3. **Java**: Para o backend, é necessário ter o JDK 11 ou superior.

### Passos para Execução

#### Backend (Spring Boot)

1. Clone o repositório do backend:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio-backend.git
   cd seu-repositorio-backend
   ```

2. Configure o banco de dados MySQL:
   - Crie um banco de dados chamado `cadastro_entidades`.
   - Atualize as credenciais do banco no arquivo `application.properties` ou `application.yml` do backend, conforme o seu banco de dados local.

3. Compile e execute o backend utilizando o Maven ou Gradle:
   ```bash
   mvn spring-boot:run
   ```
   Ou, se estiver utilizando Gradle:
   ```bash
   ./gradlew bootRun
   ```

#### Frontend (React)

1. Clone o repositório do frontend:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio-frontend.git
   cd seu-repositorio-frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

4. A aplicação estará disponível no navegador, geralmente no endereço `http://localhost:3000`.

## Como Utilizar a Aplicação

1. A aplicação é composta por vários formulários de cadastro para diferentes tipos de entidades (ONG, Voluntário, Doação, Evento, etc.).
2. Para cadastrar um novo item, clique no botão "Cadastrar" correspondente.
3. Preencha os campos obrigatórios e clique em "Cadastrar" para enviar os dados.
4. Você pode alternar entre os diferentes formulários de cadastro e visualizar as entidades já cadastradas.

## Estilos da Aplicação

A aplicação possui um design simples com cores personalizadas. O fundo é azul, o texto é preto e a fonte usada é `Arial`. Cada formulário tem um campo de entrada com bordas arredondadas e sombras suaves para criar um visual agradável e fácil de usar.

