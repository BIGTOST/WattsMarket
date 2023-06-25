const contractStatus = require('../models/contract.status.model');

const controller = {};

controller.createContractStatus = async (req, res)=>{
    const {status} = req.body;
    console.log({status});

    const data = await contractStatus.create({
        V: 1 ,
        status:status,
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

controller.listContractStatus = async (req, res) => {
    const data = await contractStatus.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findContractStatus = async (req, res) =>{
    const {idContractStatus} = req.params;

    const data = await contractStatus.findAll({
        where:{idContractStatus: idContractStatus},
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

controller.updateContractStatus = async (req,res) =>{
    const {idContractStatus} = req.params;
    console.log(idContractStatus);

    const {status} = req.body;
    console.log(status);

    const data = await contractStatus.update({
        status:status
    },{
        where:{idContractStatus:idContractStatus}
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

controller.deleteContractStatus = async (req,res) =>{
    const {idContractStatus} = req.params;
    console.log(idContractStatus);

    const data = await contractStatus.update({
        V:0
    },{
        where:{idContractStatus:idContractStatus}
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