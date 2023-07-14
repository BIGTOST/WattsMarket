const Sequelize = require('sequelize');
const BD = require('./database.model');

const InfrastructureType = BD.define('InfrastructureType',{
    idInfrastructureType:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    V:Sequelize.INTEGER,
    type:Sequelize.STRING()
});

module.exports = InfrastructureType