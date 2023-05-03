// Importando o express
const express = require('express');

// Definindo as rotas
const routes = express.Router();

// Recebendo as informações
routes.get('/', (req, res) => {
    //Resposta formato de texto
    res.send('Hello World!');
});

// Rota de POST
routes.post('/cadastrar', (req, res) => {
    //pegar as informações do body
    console.log(req.body)
    res.json(req.body)
});

// Exporta modulos
module.exports = routes;
