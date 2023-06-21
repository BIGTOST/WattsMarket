const Sequelize = require('sequelize');
const BD = require('./BD');

const Infrastructure = require('./infastructure');

const Production = BD.define('Production',{
    idProduction:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncremente:true
    },
    ProductionMonth:Sequelize.STRING(45),
    ProductionKW: Sequelize.DECIMAL(5)
})

Production.belongsTo(Infrastructure, {foreignKey:'idInfrastructure'});
Infrastructure.hasMany(Production, {foreignKey:'idInfrastructure'});

module.exports = Production