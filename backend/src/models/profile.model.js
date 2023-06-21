const Sequelize = require('sequelize');
const BD = require('./database.model');
const sequelize = require('./database.model');


const Profiles = BD.define('Profiles', {
    idProfile:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncremente: true
    },
    V: Sequelize.INTEGER,
    Profile:Sequelize.STRING(45)
},{
    timestamp: false,
    modelName:'Profiles'
})

module.exports = Profiles;