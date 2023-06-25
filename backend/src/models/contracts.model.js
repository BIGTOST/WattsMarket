const Sequelize = require('sequelize');
const BD = require('./database.model');

const user = require('./users.model');
const pack = require('./pack.model')
const ContractStatus = require('./contract.status.model');
const ContractType = require('./contract.type.model');

const Contracts = BD.define('Contracts',{
    idContract:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    V:Sequelize.INTEGER,
    startDate:Sequelize.DATE,
    endDate:Sequelize.DATE
});

//*ID do comprador
Contracts.belongsTo(user,{foreignKey:'buyer'});
user.hasMany(Contracts,{foreignKey:'buyer'});

//*ID do Administrador que validou o contrato
Contracts.belongsTo(user,{foreignKey:'validator'});
user.hasMany(Contracts,{foreignKey:'validator'});

Contracts.belongsTo(pack,{foreignKey:'idPack'});
pack.hasMany(Contracts,{foreignKey:'idPack'});

Contracts.belongsTo(ContractStatus,{foreignKey:'status'});
ContractStatus.hasMany(Contracts,{foreignKey:'status'});

Contracts.belongsTo(ContractType,{foreignKey:'type'});
ContractType.hasMany(Contracts,{foreignKey:'type'});


module.exports =Contracts;
