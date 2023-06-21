const Sequelize  = require('sequelize');
const BD = require('./database.model');

const Contract = require('./contracts.model');

const Docs = BD.define('Docs', {
    idDoc:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncriment: true
    }
});

Docs.belongsTo(Contract, {foreignKey:'idContract'});
Contract.hasMany(Docs,{foreignKey:'idContract'});

module.exports = Docs