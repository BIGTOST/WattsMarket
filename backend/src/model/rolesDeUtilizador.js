const Sequelize = require('sequelize');
const sequelize = require('./database');

//* Importação da tabela Role
const Roles = require('./Roles');
const rolesDeUtilizador = sequelize.define('rolesDeUtilizador',{
    id_Role:{
        type: Sequelize.INTEGER,
        references:{
            model: 'Roles',
            key:'id_Roles'
        },
    },
    id_User:{
        type: Sequelize.INTEGER,
        references:{
            model:'User',
            key:'id_user'
        }
    }
},{
    sequelize,
    timestamp:false,
    modelName:'rolesDeUtilizador'
})

rolesDeUtilizador.asociate = (model)=>{
    rolesDeUtilizador.belongsToMany(Roles, {foreignKey:'Id_Roles'})
    rolesDeUtilizador.belongsToMany(user, {foreignKey:'Id_User'})
}

module.exports = rolesDeUtilizador; 