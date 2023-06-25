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
    email: Sequelize.STRING(45),
    password: Sequelize.STRING(45),
    name: Sequelize.STRING(45),
    NIF:Sequelize.STRING(45),
    birthday: Sequelize.DATE,
    address: Sequelize.STRING(45),
    IBAN: Sequelize.STRING(45),
    phone: Sequelize.INTEGER,
});

module.exports = Users;