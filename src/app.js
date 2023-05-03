// Importar express
const express = require('express');

//Importar rotas
const routes = require('./routes');

// Servidor
const app = express();

// Converter em json ultilizar antes das rotas 
app.use(express.json());

////////////////////////

// Usar rotas que criei 
app.use(routes);


// Porta
app.listen(3333, () => console.log('servidor rodando na porta 3333') );

