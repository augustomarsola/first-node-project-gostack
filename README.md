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
