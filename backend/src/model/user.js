const Sequelize = require('sequelize');
const sequelize = require("./database");

const rolesDeUtilizador = require('./rolesDeUtilizador');
const Role = require('./Roles');

const users = sequelize.define('users',{
    id_users:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    nome:Sequelize.STRING,
    numero:Sequelize.CHAR(9),
    data_de_nascimento:Sequelize.DATE,
    email:Sequelize.STRING,
    senha: Sequelize.STRING

})

users.asociate =(model) =>{
    users.belongsToMany(Role, {through:'roleDeUtilizador',foreigKey:'id_user'});
}

