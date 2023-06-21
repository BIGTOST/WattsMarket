const Sequelize = require('sequelize');
const BD = require('./database.model');

const InfrastructureType = BD.define('InfrastructureType',{
    idInfrastructureType:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    type:Sequelize.STRING(45)
});

module.exports = InfrastructureType