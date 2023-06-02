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
    },
    id_pacote:{
      type: Sequelize.INTEGER,
      reference:{
        model:'pacotes',
        key:'id_pacote'
      }  
    },
    id_tipo_de_pagamento:{
        type:Sequelize.INTEGER,
        reference:{
            model:'formasDePagamento',
            key:'id_forma'
        }  
    },

    dataDeCompra:Sequelize.DATE
},{
    sequelize,
    timeStamp:true,
    model:'compraDePacotes'
});

compraDePacotes.asociate = (model)=>{
    compraDePacotes.hasOne(pacotes,{foreignKey:'id_pacote'});
    compraDePacotes.hasMany(documentos,{foreignKey:'id_documento'});
    compraDePacotes.belongTo(users,{foreignKey:'id_comprador'});
    compraDePacotes.belongTo(formasDePagamento,{foreignKey:'id_tipo_de_pagamento'})
}
module.exports = compraDePacotes;