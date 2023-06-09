const db = require("../database");
const { DataTypes } = require('sequelize')

const Produtos = db.define('Produtos', {
    id: {type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    nome: {
        type: DataTypes.STRING,
    },
    preco: {
        type: DataTypes.FLOAT,
    },
    quantidade: {
        type: DataTypes.INTEGER,
    },
    createAt: {
        type: DataTypes.DATE,
    },
    updateAt: {
        type: DataTypes.DATE,
    },  
},
{
      // Configuração nome da database
    tableName: 'Produto'
}
);

module.exports = Produtos;