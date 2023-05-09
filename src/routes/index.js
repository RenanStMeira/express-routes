// Importando o express
const express = require('express');

// Definindo as rotas
const routes = express.Router();

// Importar produtoController
const produtoController = require('../controllers/produtoController');
routes.get('/produto/lista', produtoController.listarProduto);


// Rota POST criar Produto
routes.post('/produto/criar', produtoController.cadastrarProduto);


// Exporta modulos
module.exports = routes;
