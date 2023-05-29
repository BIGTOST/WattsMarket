const Sequelize = require('sequelize');
const sequelize = require('./database');

const users = require('./user');
const Roles = sequelize.define('roles',{
    id_Role:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncremente: true
    },
    nome: Sequelize.STRING(256)
},{
    sequelize,
    timestamp: false,
    modelName: 'roles'
});

Roles.asociate =(model) =>{
    Roles.belongsToMany(users, {through:'roleDeUtilizador',foreigKey:'id_Role'});
}

module.exports = Roles;