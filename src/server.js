// importar dependência//
const express = require("express");
const path = require("path");
const pages = require("./pages.js");


//iniciando o express//
const server = express();
server
  //utilizando arquivos estáticos//
  .use(express.static("public"))

  //Configurar template engine//
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //Rotas da Aplicação//
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  

//Ligar servidor//
server.listen(5500);
