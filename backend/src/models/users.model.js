//*Invocação do packge sequelize para a criação da BD
const Sequelize = require('sequelize');
//*invocação da base de dados
const BD = require('./database.model');

const Users = BD.define('Users',{
    idUser:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    V: Sequelize.INTEGER,
    Email: Sequelize.STRING(45),
    Password: Sequelize.STRING(45),
    Name: Sequelize.STRING(45),
    NIF:Sequelize.STRING(45),
    Birthday: Sequelize.DATE,
    Address: Sequelize.STRING(45),
    IBAN: Sequelize.STRING(45),
    Phone: Sequelize.INTEGER,
},{
    timestamp: false,
    mnodelName:'Users'
});

module.exports = Users;