const Sequelize = require('sequelize');
const BD = require('./database.model');

const pack = require('./pack.model');

const PackValueHistorys = BD.define('PackValueHistory',{
    idValue:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Value:Sequelize.DECIMAL(5),
    StartData:Sequelize.DATE,
    EndData:Sequelize.DATE,
});

PackValueHistorys.belongsTo(pack,{foreignKey:'idPack'});
pack.hasMany(PackValueHistorys, {foreignKey:'idPack'});

module.exports = PackValueHistorys;

