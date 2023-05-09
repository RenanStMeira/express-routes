const Produtos = require("../models/Produtos");


// Criar um objeto estrurua
const produtoController = {
    //Listagem de produtos
    listarProduto: (req, res) => {
        //array de objeto dos produtos
        res.json([{nome: 'Produto 1'}, {nome: 'Produto 2'}]);
    },

    // criar metodo cadastrar produto POST
    async cadastrarProduto (req, res)  {
       const {nome, preco, quantidade } = req.body;

       const novoProduto = await Produtos.create({
        nome,
        preco, 
        quantidade,
       });

        res.json(novoProduto);
    },
};

module.exports = produtoController;