const Sequelize = require('sequelize');
const BD = require('./database.model');

const type = require('./infrastructure.type.model');
const user = require('./users.model');


const Infrastructure = BD.define('Infrastructure',{
    idInfrastructure:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIntremente: true
    },
    V: Sequelize.INTEGER,
    capacity: Sequelize.INTEGER,
    zone: Sequelize.STRING(45),
});

Infrastructure.belongsTo(type, {foreignKey:'type'});
type.hasMany(Infrastructure,{foreignKey:'type'});
Infrastructure.belongsTo(user, {foreignKey:'vendor'});
user.hasMany(Infrastructure, {foreignKey:'vendor'});


module.exports = Infrastructure;
