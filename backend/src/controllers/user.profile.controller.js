const userProfile = require('../models/user.profile.model');

const controller = {};

controller.createUserProfile = async (req, res)=>{
    const {idUser,idProfile} = req.body;
    console.log(idUser,idProfile);

    const data = await userProfile.create({
        V: 1 ,
        idUser:idUser,
        idProfile:idProfile,
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

controller.listUserProfile = async (req, res) => {
    const data = await userProfile.findAll()
    .catch(error=>{
        return error;
    });
    res.json({
        success:true, 
        data:data
    });
}

controller.findUserProfile = async (req, res) =>{
    const {idUserProfiles} = req.params;
    console.log(idUserProfiles);

    const data = await userProfile.findAll({
        where:{idUserProfiles:idUserProfiles},
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

controller.updateUserProfile = async (req,res) =>{
    const {idUserProfiles} = req.params;
    console.log(idUserProfiles);

    const {idUser,idProfile} = req.body;
    console.log(idUser,idProfile);

    const data = await userProfile.update({
        idUser:idUser,
        idProfile:idProfile,

    },{
        where:{idUserProfiles:idUserProfiles}
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

controller.deleteUserProfile = async (req,res) =>{
    const {idUserProfiles} = req.params;
    console.log(idUserProfiles);

    const data = await userProfile.update({
        V:0
    },{
        where:{idUserProfiles:idUserProfiles}
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