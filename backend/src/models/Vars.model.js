const Sequelize = require('sequelize');
const BD = require('./database.model');
const sequelize = require('./database.model');

const Vars = BD.define('Vars', {
    idVar:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    V:Sequelize.INTEGER,
    inflationMax:Sequelize.DOUBLE(5),
    productionCap:Sequelize.DOUBLE(5)

});

module.exports= Vars;