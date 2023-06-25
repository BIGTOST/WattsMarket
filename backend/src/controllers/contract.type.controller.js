const contractType = require('../models/contract.type.model');

const controller = {};

controller.createContractType = async (req, res)=>{
    const {type} = req.body;
    console.log({type});

    const data = await contractType.create({
        V: 1 ,
        type:type,
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

controller.listContractType = async (req, res) => {
    const data = await contractType.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findContractType = async (req, res) =>{
    const {idContractType} = req.params;

    const data = await contractType.findAll({
        where:{idContractType: idContractType},
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

controller.updateContractType = async (req,res) =>{
    const {idContractType} = req.params;
    console.log(idContractType);

    const {type} = req.body;
    console.log(type);

    const data = await contractType.update({
        type:type
    },{
        where:{idContractType:idContractType}
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

controller.deleteContractType = async (req,res) =>{
    const {idContractType} = req.params;
    console.log(idContractType);

    const data = await contractType.update({
        V:0
    },{
        where:{idContractType:idContractType}
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