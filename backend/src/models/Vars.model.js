const Sequelize = require('sequelize');
const BD = require('./database.model');

const Vars = BD.define('Vars', {
    idVar:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    InflationMax:Sequelize.DECIMAL(5),
    ProductionCap:Sequelize.DECIMAL(5)
});

module.exports= Vars;