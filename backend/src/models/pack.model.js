const Sequelize = require('sequelize');
const BD = require('./database.model');

const user = require('./users.model');

const Packs = BD.define('Packs',{
    idPack:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    V:Sequelize.INTEGER,
    KW:Sequelize.DOUBLE(),
    value:Sequelize.DOUBLE(),
    valueData:Sequelize.DATE
});

Packs.belongsTo(user,{foreignKey:'vendor'});
user.hasMany(Packs,{foreignKey:'vendor'});

module.exports = Packs