const Sequelize = require('sequelize');
const BD = require('./database.model');

const users = require('./users.model');
const profiles = require('./profile.model');

const UserProfiles = BD.define('UserProfiles',{
    idUserProfile:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    V:Sequelize.INTEGER
});


UserProfiles.belongsTo(users, {foreignKey:'idUser'});
users.hasMany(UserProfiles, {foreignKey:'idUser'});
UserProfiles.belongsTo(profiles,{foreignKey:'idProfile'});
profiles.hasMany(UserProfiles, {foreignKey:'idProfile'});


module.exports = UserProfiles