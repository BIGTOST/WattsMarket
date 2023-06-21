const Sequelize = require('sequelize');
const BD = require('./database.model');

const user = require('./users.model');
const pack = require('./pack.model')
const ContractStatus = require('./contract.statu.model');
const ContractType = require('./contract.type.model');

const Contracts = BD.define('Contracts',{
    idContract:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    StartDate:Sequelize.DATE,
    EndDate:Sequelize.DATE
});

//*ID do comprador
Contracts.belongsTo(user,{foreignKey:'Buyer'});
user.hasMany(Contracts,{foreignKey:'Buyer'});

//*ID do Administrador que validou o contrato
Contracts.belongsTo(user,{foreignKey:'Validator'});
user.hasMany(Contracts,{foreignKey:'Validator'});

Contracts.belongsTo(pack,{foreignKey:'idPack'});
pack.hasMany(Contracts,{foreignKey:'idPack'});

Contracts.belongsTo(ContractStatus,{foreignKey:'Status'});
ContractStatus.hasMany(Contracts,{foreignKey:'Status'});

Contracts.belongsTo(ContractType,{foreignKey:'Type'});
ContractType.hasMany(Contracts,{foreignKey:'Type'});


module.exports =Contracts;
