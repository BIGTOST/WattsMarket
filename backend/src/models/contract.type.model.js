const Sequelize = require('sequelize');
const BD = require('./database.model');

const ContractType = BD.define('ContractType',{
    idContractType:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    V:Sequelize.INTEGER,
    type:Sequelize.STRING(45)
});

module.exports = ContractType;