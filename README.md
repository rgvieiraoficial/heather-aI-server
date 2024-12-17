<!-- PROJECT LOGO -->
<div>
  <div align="center">
    <a href="https://github.com/othneildrew/Best-README-Template">
      <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
    </a>
  </div>

  <h3 align="center">Heather AI</h3>

  <p align="center">
    This repository contains the backend for an AI-powered digital tutor, integrated with an advanced LLM-based chatbot.
 <br />
    <br />
      <a href="https://github.com">View Frontend</a>
      ·
      <a href="https://github.com">Report Bug</a>
      ·
      <a href="https://github.com">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

With the rapid growth of the blockchain ecosystem, the XRP Ledger (XRPL) has become a prominent platform for fast and secure transactions, asset issuance, and decentralized financial solutions. However, for many users, the technical complexity and learning curve associated with the usability of major projects on the XRPL remain significant barriers to adoption.

To address this challenge, we propose the creation of an innovative AI agent that will serve as a personalized digital tutor, integrated with an advanced LLM-based chatbot. This tutor will be designed to guide users intuitively and efficiently within the XRPL ecosystem, ensuring that even those with little or no technical experience can easily navigate the platform's features.

### Built With

The following languages, frameworks, and technologies were used to build the backend:

[![Node.js Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
<br/>
[![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
<br/>
[![NestJS Badge](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com)
<br/>
[![Prisma Badge](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io)
<br/>
[![Postgres Badge](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org)
<br/>
[![Docker Badge](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com)

## Running the project.

To run the project, follow these steps:

### Clone the repository

```bash
git clone https://github.com/rgvieiraoficial/heather-ai-server.git
```

### Install the dependencies.

```bash
cd heather-ai-server

yarn install
```

### Create the environment variables.

Create a copy of the .env.example file and rename it to .env.local.

Content of the .env.local file:

```bash
#Server Port
PORT=3334

#PostgreSQL
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

#PGADMIN
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=

#Secret Token
SECRET_TOKEN=

#Prisma
DATABASE_URL="postgresql://johndoe:randompassword@main-db:5432/mydb?schema=public"
```

Create another file named .env containing only the External Database Connection URI (Outside of Docker) to be able to use the Prisma CLI.

```bash
#Prisma
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```
Important: In the env.local file, the Database Connection URI should have the Host as "main-db" (or the name of the Docker service you define), while in the .env file, the Host should be "localhost." This will allow you to run migrations from the terminal of the computer running Docker while developing the project.

### Bring up the Docker containers.

```bash
docker compose up
```

### Run the Database Migrations.

```bash
npx prisma migrate dev
```

### Access the server's "Health Check" page.

```bash
http://localhost:PORT

Example:

http://localhost:3334
```

## Authors

- Project Idea - [Joseph Júnior](https://www.linkedin.com/in/j%C3%BAnior-ferreira-b23427250)
- Audiovisual Content Creator [Junior Motta](https://www.linkedin.com/in/junior-motta-439b9a269)
- UI/UX - [Yasmine](https://www.linkedin.com/in/yasminecoutinho)
- Frontend - [Klayvem Guimarães](https://github.com/KlayvemGuimaraes)
- Frontend - [Rayssa](https://github.com/rayssabuarque)
- Backend - [Yami Renato](https://github.com/rgvieiraoficial)
- Database Diagram - [Josias](https://github.com/josiasdev)
