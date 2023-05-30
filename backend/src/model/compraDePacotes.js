const Sequelize = require('sequelize');
const sequelize = require('./database');

const users = require('./user');
const pacotes = require('./pacotes');
const formasDePagamento = require('./formasDePagamento');
const documentos = require('./documentos');

const compraDePacotes = sequelize.define(compraDePacotes,{
    id_compra:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncremene: true
    },
    
    id_vendedor:{
        type:Sequelize.INTEGER,
        reference:{
            model:'pacotes',
            key:'id_vendedor',
        }
    },
    id_comprador:{
        type: Sequelize.INTEGER,
        reference:{
            model:'users',
            key:'id_users',
        }
    },
    id_documento:{
        type: Sequelize.INTEGER,
        reference:{
            model:'documentos',
            key:'id_documento'
        }
    }
    
})
module.exports = compraDePacotes