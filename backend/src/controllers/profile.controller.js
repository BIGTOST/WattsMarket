const profileBD = require('../models/profile.model');

const controller = {};

controller.createProfile = async (req, res)=>{
    const {profile} = req.body;
    console.log(profile);

    const data = await profileBD.create({
        V: 1 ,
        profile:profile,
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

controller.listProfile = async (req, res) => {
    const data = await profileBD.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findProfile = async (req, res) =>{
    const {idProfile} = req.params;
    console.log(idProfile);

    const data = await profileBD.findAll({
        where:{idProfile: idProfile},
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

controller.updateProfile = async (req,res) =>{
    const {idProfile} = req.params;
    console.log(idProfile);

    const {profile} = req.body;
    console.log(profile);

    const data = await profileBD.update({
        profile:profile,

    },{
        where:{idProfile:idProfile}
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

controller.deleteProfile = async (req,res) =>{
    const {idProfile} = req.params;
    console.log(idProfile);

    const data = await profileBD.update({
        V:0
    },{
        where:{idProfile:idProfile}
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