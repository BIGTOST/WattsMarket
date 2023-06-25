const Sequelize = require('sequelize');
const BD = require('./database.model');

const PaymentMethod = BD.define('PaymentMethod', {
    idPaymentMethod:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    content:Sequelize.STRING(45)
});

module.exports = PaymentMethod;