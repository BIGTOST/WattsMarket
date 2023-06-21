const Sequelize = require('sequelize');
const BD = require('./BD');
const sequelize = require('./BD');


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