const Sequelize = require('sequelize');
const BD = require('./database.model');

const Infrastructure = require('./infrastructure.model');

const Production = BD.define('Production',{
    idProduction:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncremente:true
    },
    productionMonth:Sequelize.STRING(45),
    productionKW: Sequelize.DOUBLE(5)
})

Production.belongsTo(Infrastructure, {foreignKey:'idInfrastructure'});
Infrastructure.hasMany(Production, {foreignKey:'idInfrastructure'});

module.exports = Production