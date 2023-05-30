//* Importações bases do gerenciador de base de dados e da base de dados em si
const Sequelize = require('sequelize');
const sequelize = require('./database');

//*importação das entidades associadas
const users = require('./user');
const compraDePacotes = require('./compraDePacotes');

//*definição da entidade
const  pacotes = sequelize.define('pacotes',{
    id_pacote:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncremente: true
    },

    id_vendedor:{
        type: Sequelize.INTEGER,
        reference:{
            model:'users',
            key:'id_users'
        }
    },
    preco: Sequelize.DOUBLE,
    quantidadeDeKW: Sequelize.INTEGER,
    dataDeAnuncio: Sequelize.DATE,
    
    id_Comprador:{
        type:Sequeliz.INTEGER,
        reference:{
            model:'compraDePacotes  ',
            key:'id_Compra'
        }
    }
},{
    sequelize,
    timestamps:true,
    modelName:'pacotes'
});

//* associações
pacotes.asociate = (model)=>{
    pacotes.belongsTo(users, {foreignKey:'id_vendendor'});
    pacotes.hasOne(compraDePacotes, {foreignKey:'id_Comprador'})
}

//*exportação dos modulos
module.exports = pacotes;