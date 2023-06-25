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
const ContractStatus = require('../models/contract.status.model');
const ContractType = require('../models/contract.type.model');
const Contracts = require('../models/contracts.model');
const Documents = require('../models/document.model');
const PaymentMethod = require('../models/payment.method.model');
const Billings = require('../models/billing.model');

const controller = {};

BD.sync();


controller.createUser = async (req, res)=>{
    const {email,password,name,NIF,birthday,address,IBAN,phone} = req.body;
    console.log(email,password,name,NIF,birthday,address,IBAN,phone);

    const data = await users.create({
        V: 1 ,
        email:email,
        password:password,
        name:name,
        NIF:NIF,
        birthday:birthday,
        address:address,
        IBAN:IBAN,
        phone:phone
    })
    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log('Erro: ' + error);
        return error;
    })
    res.status(200).json({
        success:true,
        message: 'Criado',
        data: data
    });
}

controller.listUser = async (req, res) => {
    const data = await users.findAll()
    .catch(error=>{
        return error;
    });
    res.json({
        success:true, 
        data:data
    });
}

controller.findUser = async (req, res) =>{
    const {idUser} = req.params;
    console.log(idUser);

    const data = await users.findAll({
        where:{idUser:idUser},
    })
    .then(function(data){
        return data;
    })
    .catch(error =>{
        return error;
    })
    res.json({
        success:true, 
        data:data
    })
}

controller.updateUser = async (req,res) =>{
    const {idUser} = req.params;
    console.log(idUser);

    const {email,password,name,NIF,birthday,address,IBAN,phone} = req.body;
    console.log(email,password,name,NIF,birthday,address,IBAN,phone);

    const data = await users.update({
        email:email,
        password:password,
        name:name,
        NIF:NIF,
        birthday:birthday,
        address:address,
        IBAN:IBAN,
        phone:phone

    },{
        where:{idUser:idUser}
    })
    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log('Erro: ' + error);
        return error;
    })
    res.json({
        success:true
    })
    console.log('passamos no update');  
}

controller.deleteUser = async (req,res) =>{
    const {idUser} = req.params;
    console.log(idUser);

    const data = await users.update({
        V:0
    },{
        where:{idUser:idUser}
    })
    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log('Erro: ' + error);
        return error;
    })
    res.json({
        success:true,
        message: 'deletado'
    })
    console.log('passamos no update');  
}


module.exports = controller;