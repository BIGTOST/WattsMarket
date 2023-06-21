const Sequelize = require('sequelize');
const BD = require('./BD');

const users = require('./users');
const profiles = require('./Profiles');

const UserProfiles = BD.define('UserProfiles',{
    idUserProfiles:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
});


UserProfiles.belongsTo(users, {foreignKey:'idUser'});
users.hasMany(UserProfiles, {foreignKey:'idUser'});
UserProfiles.belongsTo(profiles,{foreignKey:'idProfile'});
profiles.hasMany(UserProfiles, {foreignKey:'idProfile'});


module.exports = UserProfiles