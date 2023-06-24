const BD = require('../models/database.model');
const users = require('../models/users.model');
const profiles = require('../models/profile.model');
const userProfiles = require('../models/user.profile.model');
const infrastructureType = require('../models/infrastructure.type.model');
const infastructure = require('../models/infrastructure.model');
const production = require('../models/production.model');
const vars = require('../models/Vars.model');
const Pack = require('../models/pack.model');
const PackValueHistory = require('../models/pack.value.history.model');
const ContractStatus = require('../models/contract.statu.model');
const ContractType = require('../models/contract.type.model');
const Contracts = require('../models/contracts.model');
const Documents = require('../models/document.model');
const PaymentMethod = require('../models/payment.method.model');
const Billings = require('../models/billing.model');

const controller = {};

BD.sync();


controller.userList = async(req, res)=>{
    const data = await users.findAll({
        include:[userProfiles, infastructure]
    })
    .catch(error =>{
        return error;
    });
    res.json({success:true, data:data});
    console.log('passamos pela lista');
}

controller.findUser = async (req,res) =>{
    const {idUser} = req.params;
    console.log()
}

module.exports = controller;