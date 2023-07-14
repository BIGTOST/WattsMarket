const Sequelize = require('sequelize');
const BD = require('./database.model');

const ContractStatus = BD.define('ContractStatus',{
    idContractStatus:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    V:Sequelize.INTEGER,
    status:Sequelize.STRING()
});

module.exports = ContractStatus;
