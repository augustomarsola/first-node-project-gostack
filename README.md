# 🚀 First project with Node.js - Go Stack fundamentals

![First project with Node.js](img/bg-goStack.png "First project with Node.js")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Node.js v12.18.1
```

### Installing

A step by step series of examples that tell you how to get a development env running

```
yarn
```

And run

```
yarn dev:server
```

Methods

```
POST: http://localhost:3333/appointments
Body(JSON):
{
  "provider": "Your Name",
  "date": "2020-06-23T01:00:00.000Z"
}

GET: http://localhost:3333/appointments
```


## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Typescript](https://www.typescriptlang.org/)

## Regras gerais

### Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link envido para resetar o e-mail para resetar senha, deve expirar 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

### Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

### Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenados no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

### Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestares de serviço cadastrado;
- O usuário deve poder listar as dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis de um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;


**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em horários que já passou;
- O usuários nao pode agendar serviços consigo mesmo;
