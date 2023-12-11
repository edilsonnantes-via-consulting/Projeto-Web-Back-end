const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');

const sequelize = require('./models/db');
const routes = require('./routes');
const swaggerFile = require("./swagger.json");

const app = express();
const port = 3000;

// Sincronizar o modelo com o banco de dados
sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
});

// Configurando o middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Iniciando servidor de documentação
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

// Definindo as rotas
app.use('/', routes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
