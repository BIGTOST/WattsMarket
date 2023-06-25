const infrastructure = require('../models/infrastructure.model');

const controller = {};

controller.createInfrastructure = async (req, res)=>{
    const {capacity,zone,type,vendor} = req.body;
    console.log({capacity,zone,type,vendor});

    const data = await infrastructure.create({
        V: 1 ,
        capacity:capacity,
        zone:zone,
        type:type,
        vendor:vendor
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

controller.listInfrastructure = async (req, res) => {
    const data = await infrastructure.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findInfrastructure = async (req, res) =>{
    const {idInfrastructure} = req.params;

    const data = await infrastructure.findAll({
        where:{idInfrastructure: idInfrastructure},
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

controller.updateInfrastructure = async (req,res) =>{
    const {idInfrastructure} = req.params;
    console.log(idInfrastructure);

    const {capacity,zone,type,vendor} = req.body;
    console.log(capacity,zone,type,vendor);

    const data = await infrastructure.update({
        capacity:capacity,
        zone:zone,
        type:type,
        vendor:vendor
    },{
        where:{idInfrastructure:idInfrastructure}
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

controller.deletInfrastructure = async (req,res) =>{
    const {idInfrastructure} = req.params;
    console.log(idInfrastructure);

    const data = await infrastructure.update({
        V:0
    },{
        where:{idInfrastructure:idInfrastructure}
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