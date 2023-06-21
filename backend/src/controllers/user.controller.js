const BD = require('../models/BD');
const users = require('../models/users')
const profiles = require('../models/Profiles')
const userProfiles = require('../models/UserProfiles')
const infrastructureType = require('../models/InfrasTructureType');
const infastructure = require('../models/infastructure');
const production = require('../models/Production');
const vars = require('../models/Vars');
const Pack = require('../models/Packs');
const PackValueHistory = require('../models/PackValueHistory');
const ContractStatus = require('../models/ContractStatus');
const ContractType = require('../models/ContractType');
const Contracts = require('../models/Contracts');

const controller = {};

BD.sync();
