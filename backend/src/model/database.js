//Interligação com a base de dados

//*Evocação do sequelizer
const Sequelize = require('sequelize');

//*conecção da com a base de dados
const sequelize = new Sequelize(
    //*nome_base_de_dados
    'WattsMarket-Data-Base',
    //*Owner da base de dados
    'AlexandreCardoso',
    //*senha do owner
    '2520',
    {
        //*local onde deve está a base de dados
        host:'localhost',
        port: '5432',
        dialect: 'postgres'
    }
);

module.exports = sequelize;