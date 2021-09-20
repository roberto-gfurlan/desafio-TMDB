# Desafio TMDB
## _Um aplicativo que mostra uma lista do TMDB e faz comentários_

Aplicativo baseado em NodeJS, Express, Axios, Mysql e Sequelize 😉

## Features

- Importar uma lista criada no site TMDB
- Mostrar página de detalhes dos Filmes
- Página Sobre
- Página para criar comentários usando Handlebars e Mysql
- Página que lista todos os comentários


## Tech

Dependencias usadas:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [axios] - promise based HTTP client for the browser and node.js
- [handlebars] - logicless templating languages that keep the view and the code separated like we all know they should be.
- [sequelize] - a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. 


## Installation

Para usar vc precisa do [Node.js](https://nodejs.org/) v10+, Mysql 8 e o Workbench.

1- instale as dependecias que serão usadas que estão listadas no package.json.

```sh
cd desafio-TMDB
npm install
```

2- configure seu Workbrench:

```sh
CREATE SCHEMA `banco_comentarios` ;
CREATE TABLE `banco_comentarios`.`comentarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `comentario` VARCHAR(300) NOT NULL,
  `data` DATETIME NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
  PRIMARY KEY (`id`));
```
3- dentro da pasta _MODELS > db.js_, atualize a função _sequelize_ com os dados da sua conexão ao banco de dados

```sh
const sequelize = new Sequelize('banco_comentarios', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
```

3- pronto! Agora é só rodar 🎉 e abrir no localhost:8080
```sh
npm start
Servidor iniciando na porta 8088
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [axio]: <https://axios-http.com/docs/intro>
   [handlebars]: <https://handlebarsjs.com/>
   [sequelize]: <https://sequelize.org/>

