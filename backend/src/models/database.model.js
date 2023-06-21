const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'WattsMarket-Data-Base',
    'AlexandreCardoso',
    '2520',
    {
        host:'localhost',
        port:'5432',
        dialect:'postgres'
    }
);

module.exports = sequelize;