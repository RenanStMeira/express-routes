// Criar um objeto estrurua
const produtoController = {
    //Listagem de produtos
    listarProduto: (req, res) => {
        //array de objeto dos produtos
        res.json([{nome: 'Produto 1'}, {nome: 'Produto 2'}]);
    },

    // criar metodo cadastrar produto POST
    cadastrarProduto: (req, res) => {
        console.log(req.body);
        res.json("Produto cadastrado com sucesso");
    }
};

module.exports = produtoController;