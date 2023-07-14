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
    profile:Sequelize.STRING()
})

module.exports = Profiles;