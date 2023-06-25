//*Invocação do packge sequelize para a criação da BD
const Sequelize = require('sequelize');
//*invocação da base de dados
const BD = require('./database.model');

const bcrypt = require('bcrypt')

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

Users.beforeCreate((user, options) =>{
    return bcrypt.hash(user.password, 10)
    .then(hash =>{
        user.password = hash;
    })
    .catch(error=>{
        throw new Error();
    });
});

module.exports = Users;