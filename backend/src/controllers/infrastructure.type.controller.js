const infrastructureType = require('../models/infrastructure.type.model');

const controller = {};

controller.createInfrastructureType = async (req, res)=>{
    const {type} = req.body;
    console.log({type});

    const data = await infrastructureType.create({
        V: 1 ,
        type:type
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

controller.listInfrastructureType = async (req, res) => {
    const data = await infrastructureType.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findInfrastructureType = async (req, res) =>{
    const {idInfrastructureType} = req.params;
    console.log(idInfrastructureType);

    const data = await infrastructureType.findAll({
        where:{idInfrastructureType: idInfrastructureType},
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

controller.updateInfrastructureType = async (req,res) =>{
    const {idInfrastructureType} = req.params;
    console.log(idInfrastructureType);

    const {type} = req.body;
    console.log(type);

    const data = await infrastructureType.update({
        type:type
    },{
        where:{idInfrastructureType:idInfrastructureType}
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

controller.deletInfrastructureType = async (req,res) =>{
    const {idInfrastructureType} = req.params;
    console.log(idInfrastructureType);

    const data = await infrastructureType.update({
        V:0
    },{
        where:{idInfrastructureType:idInfrastructureType}
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