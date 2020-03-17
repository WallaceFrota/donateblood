# donateblood
* Sistema de doação de sangue usando nodejs e mongodb

![](http://i.giphy.com/fx0Eu0Hbi46ZulQqyu.gif)


### Começando
Faça o download ou clone o repositório, dentro da pasta do seu projeto.

### git clone (url do repositório)

Usando o **docker** para trabalhar com o mongodb, baixe para seu computador aqui -> [docker](https://docs.docker.com)


Verificando se instalação foi bem sucedida, no terminal digite **docker** se retornar algumas opções de comandos do docker ocorreu tudo bem.

Baixando a máquina (container) virtual mongodb

```
docker pull mongo
```

Subindo a máquina redirecionando portas

```
docker run --name mongodb -p 27017:27017 -d mongo
```

Verificar se está iniciada

**docker ps**

Testando no navegador

**localhost:27017** ou o ip docker


Utilizando o **robo3t** para verificar os dados dos produtos salvos no mongodb

Download: [robo3t](https://robomongo.org/)

**Utilizando:** Clique em **create** para criar uma conexão, deixe **localhost e porta padrão 27017, se não funcionar com localhost coloque o ip do docker**, dê um **nome**, aperte em **save** e **connect**.

### Módulos utilizados, instalados via npm.

* Express é fornecer ferramentas pequenas e robustas para servidores HTTP.
```
npm install express
```
* Nunjucks template engine, permite organizar e manipular os conteúdos HTML de uma maneira mais fácil, intuitiva e dinâmica.
```
npm install nunjucks --save
```
* Mongoose é um orm de banco não relacionais em mongodb. relação de tranformar as tabelas em objetos JavaScript
```
npm install mongoose
```

### RODANDO A APLICAÇÃO VIA CMD

* npm start server.js


