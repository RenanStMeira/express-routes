// Importar express
const express = require('express');

//Importar rotas
const routes = require('./routes');

//Importar hasConection db
const db = require('./database');

// Servidor
const app = express();

db.hasConection();

// Converter em json ultilizar antes das rotas 
app.use(express.json());


// Usar rotas que criei 
app.use(routes);


// Porta
app.listen(3001, () => console.log('servidor rodando na porta 3001') );

