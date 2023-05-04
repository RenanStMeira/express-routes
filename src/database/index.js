// Conexao com banco de dados
const Sequelize = require('sequelize');

//Informaçoes do mysql
 const DB_NAME ='pet';
 const DB_USER = 'root';
 const DB_PASS = '@Ana301200';

 // Configuração do mysql
 const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
 };

 // Objeto para guardar a conexão do banco de dados
 let db = {};

 try
  { db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

 } catch (error) {
    console.error('Erro ao tentar conexão com banco de dados');
 }

 // Testar conexão com o banco de dados
 async function hasConection(){
    try {
        await db.authenticate();
        console.log('Conexão realizada com sucesso');

    } catch (error) {
        console.error('Erro ao tentar conexão com banco de dados');
    }
  }

  //Exportar função hasConection
  Object.assign(db, {
    hasConection,
  })


//Exportar o db
module.exports = db;