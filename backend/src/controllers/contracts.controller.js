const contract = require('../models/contracts.model');

const  controller = {};

controller.createContract = async (req, res)=>{
    const {buyer,idPack,status,type} = req.body;
    console.log({buyer,idPack,status,type});

    const data = await contract.create({
        V: 1 ,
        buyer:buyer,
        idPack:idPack,
        status:status,
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

controller.listContract = async (req, res) => {
    const data = await contract.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findContract = async (req, res) =>{
    const {idContract} = req.params;

    const data = await contract.findAll({
        where:{idContract: idContract},
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

controller.updateContract = async (req,res) =>{
    const {idContract} = req.params;
    console.log(idContract);

    const {buyer,idPack,status,type,startDate,endDate} = req.body;
    console.log(buyer,idPack,status,type,startDate,endDate);

    const data = await contract.update({
        buyer:buyer,
        idPack:idPack,
        status:status,
        type:type,
        startDate:startDate,
        endDate:endDate,
    },{
        where:{idContract:idContract}
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

controller.deleteContract = async (req,res) =>{
    const {idContract} = req.params;
    console.log(idContract);

    const data = await contract.update({
        V:0
    },{
        where:{idContract:idContract}
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