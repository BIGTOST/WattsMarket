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
const UserProfiles = require('../models/user.profile.model');
const Users = require('../models/users.model');

const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt');
const config = require('../config');
const controller = {};

BD.sync();


controller.createUser = async (req, res)=>{
    const {email,password,name,NIF,birthday,address,IBAN,phone, idUserProfile} = req.body;
    console.log(email,password,name,NIF,birthday,address,IBAN,phone);


    try{
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
        });

        if(idUserProfile !== 3){
            const createUserProfile = await UserProfiles.create({
                V:1,
                idUser: data.idUser,
                idProfile: idUserProfile
            })
            .then(function(data){
                return data;
            })
            .catch(error =>{
                console.log('Erro na criação do UserProfile:' + error);
                return error
            })
            res.status(200).json({
                success: true,
                message: "UserProfile Criado",
                data: data
            })
        }
        else{
            for(let i = 1; i < 3;i++){
                const createUserProfile = await UserProfiles.create({
                    V:1,
                    idUser: data.idUser,
                    idProfile: i
                })
                .then(function(data){
                    return data;
                })
                .catch(error =>{
                    console.log('Erro na criação do UserProfile:' + error);
                    return error
                })
                res.status(200).json({
                    success: true,
                    message: "UserProfile Criado",
                    data: data
                })
            }
        }
        res.status(200).json({
            success:true,
            message: 'User e UserProfile Criados',
            data: data
        });
    }catch(error){
        console.log('Erro: ' + error);
        // res.status(500).json({
        //     success:false,
        //     message:'Failed to create user and userProfile',
        //     error:error
        // });
    };
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
controller.findEmail = async (req, res)=>{
    const {email}  = req.params
    console.log(email);

    const data = await users.findAll(
        {
            where: {email: email}
        }
    )
    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log('Error: ' + error);
        return error;
    })
    res.json({
        success: true,
        data: data
    })
}

controller.login = async (req,res) =>{
    let email =  req.body.email;
    let password = req.body.password

    if(req.body.email && req.body.password){
        email = req.body.email;
        password = req.body.password;
    }
    var user = await Users.findOne(
        {where:{email:email}}
    )
    .then(function(data){
        return data;
    })
    .catch(error =>{
        console.log('Erro: '+error);
        return error;
    })
    if (password === null || typeof password === 'undefined'){
        res.status(403).json({
            success: false,
            message:'Campos em Branco'
        });
    }
    else{
        if(req.body.email && req.body.password && user){
            const inMatch = bcrypt.compareSync(password, user.password);
            if(req.body.email === user.email && inMatch){
                let token = jwt.sign({
                    email:req.body.email
                },
                    config.jwtSecret
                ,{
                    expiresIn: '4h'
                });
                res.json({
                    success:true,
                    message:'Autenticação realizada com sucesso',
                    token:token
                });
            }else{
                res.status(403)
                .json({
                    success:false,
                    message:'Dados de autenticação invalidos'
                });
            }
        }
        else{
            res.status(400)
            .json({
                success:false,
                message: 'Erro no processo de autenticação. Tente de novo mais tarde'
            });
        }
    }
}


module.exports = controller;