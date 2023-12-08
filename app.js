const express = require('express');
const sequelize = require('./models/db');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 3000;

// Configurando o middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Sincronizar o modelo com o banco de dados
sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
});

// Definindo as rotas
app.use('/api', routes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
