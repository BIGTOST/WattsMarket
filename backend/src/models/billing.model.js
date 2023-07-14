const Sequelize = require('sequelize');
const BD = require('./database.model');

const contract = require('./contracts.model');
const paymentMethod = require('./payment.method.model');

const billing = BD.define('Billings',{
    idTransaction:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    V: Sequelize.INTEGER,
    billingMonth:Sequelize.STRING(),
    value:Sequelize.DOUBLE(),
    dueDate:Sequelize.DATE,
    payment:Sequelize.DATE
});

billing.belongsTo(contract,{foreignKey:'idContract'});
contract.hasMany(billing,{foreignKey:'idContract'});

billing.belongsTo(paymentMethod,{foreignKey:'idPaymentMethod'});
paymentMethod.hasMany(billing,{foreignKey:'idPaymentMethod'});

module.exports =billing;