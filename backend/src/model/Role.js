const Sequelize = require('sequelize');
const sequelize = require('./database');

const Role = sequelize.define('role',{
    id_Role:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncremente: true
    },
    nome: Sequelize.STRING(256)
})