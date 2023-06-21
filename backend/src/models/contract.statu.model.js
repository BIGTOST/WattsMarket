const Sequelize = require('sequelize');
const BD = require('./database.model');

const ContractStatus = BD.define('ContractStatus',{
    idContractStatus:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Status:Sequelize.STRING(45)
});

module.exports = ContractStatus;
