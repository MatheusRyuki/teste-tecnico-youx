# Projeto de Gerenciamento de Clínica

Este projeto é uma aplicação web para gerenciar pacientes, médicos e enfermeiros em uma clínica. Ele é composto por um frontend em React e um backend em Spring Boot.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (inclui o npm)
- Java JDK 11+
- Maven
- MongoDB Atlas (ou uma instância local do MongoDB)

## Configuração do Backend (Spring Boot)

1. **Clone o repositório:**
   git clone https://github.com/MatheusRyuki/teste-tecnico-youx.git
   
2. **Acesse o Backend**  
   cd ./backend

3. **Compile e execute o backend:**
    mvn clean install
    mvn spring-boot:run
    O backend estará rodando em http://localhost:8080.

4. **Navegue ao frontend**
    cd ..
    cd ./frontend

5. **Instale as dependências**
    npm install

6. **Execute o frontend**
    npm start
    O frontend estará rodando em http://localhost:3000.


## Uso
1. Acesse a aplicação: Abra o navegador e vá para http://localhost:3000.
2. Faça login: Use o botão de login para se autenticar via Auth0.
3. Gerencie os dados:
    - Pacientes: Visualize e gerencie os pacientes cadastrados.
    - Médicos: Cadastre novos médicos.
    - Enfermeiros: Cadastre novos enfermeiros.