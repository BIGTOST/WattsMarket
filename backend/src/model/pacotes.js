//* Importações bases do gerenciador de base de dados e da base de dados em si
const Sequelize = require('sequelize');
const sequelize = require('./database');

const users = require('./user');
const compraDePacotes = require('./compra_de_pacotes');

const  pacotes = sequelize.define('pacotes',{
    id_pacote:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncremente: true
    },

    id_vendedor:{
        type: Sequelize.INTEGER,
        reference:{
            model:'users',
            key:'id_users'
        }
    },
    preco: Sequelize.DOUBLE,

});

module.exports = pacotes;