const Sequelize = require('sequelize')

const sequelize = new Sequelize('banco_comentarios', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate()
.then(function(){
  console.log("Conexao com banco de dados feita com sucesso")
}).catch(function(){
  console.log("Erro com a conexao do banco de dados")
})

  module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
  }