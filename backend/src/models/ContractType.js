const Sequelize = require('sequelize');
const BD = require('./BD');

const ContractType = BD.define('ContractType',{
    idContractType:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    Type:Sequelize.STRING(45)
});

module.exports = ContractType;