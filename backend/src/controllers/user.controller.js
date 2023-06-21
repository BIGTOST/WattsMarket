const BD = require('../models/BD');
const users = require('../models/users')
const profiles = require('../models/Profiles')
const userProfiles = require('../models/UserProfiles')
const infrastructureType = require('../models/InfrasTructureType');
const infastructure = require('../models/infastructure');
const production = require('../models/Production');

const controller = {};

BD.sync();
