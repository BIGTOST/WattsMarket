const Sequelize = require('sequelize');
const BD = require('./database.model');

const PaymentMethod = BD.define('PaymentMethod', {
    idPaymentMethod:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    V:Sequelize.INTEGER,
    content:Sequelize.STRING()
});

module.exports = PaymentMethod;