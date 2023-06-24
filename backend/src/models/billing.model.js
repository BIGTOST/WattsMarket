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
    BillingMonth:Sequelize.STRING(45),
    Value:Sequelize.DOUBLE(45),
    DueDate:Sequelize.DATE,
    Payment:Sequelize.DATE
});

billing.belongsTo(contract,{foreignKey:'idContract'});
contract.hasMany(billing,{foreignKey:'idContract'});

billing.belongsTo(paymentMethod,{foreignKey:'idPaymentMethod'});
paymentMethod.hasMany(billing,{foreignKey:'idPaymentMethod'});

module.exports =billing;