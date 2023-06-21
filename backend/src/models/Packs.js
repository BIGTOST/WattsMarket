const Sequelize = require('sequelize');
const BD = require('./BD');

const user = require('./users');

const Packs = BD.define('Packs',{
    idPack:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    V:Sequelize.INTEGER,
    KW:Sequelize.DECIMAL(5),
    Value:Sequelize.DECIMAL(5),
    ValueData:Sequelize.DATE    
});

Packs.belongsTo(user,{foreignKey:'Vendor'});
user.hasMany(Packs,{foreignKey:'Vendor'});

module.exports = Packs