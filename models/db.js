const Sequelize = require('sequelize');

const sequelize = new Sequelize("usuarios", "root", "bejamim",{
    host: 'localhost',
    dialect: 'mysql' 
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizado com sucesso.");

}).catch(function(){
console.log("Erro ao conectar banco de dados.");
});


module.exports = sequelize;