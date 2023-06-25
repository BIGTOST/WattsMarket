const packValueHistory = require('../models/pack.value.history.model');

const controller = {};

controller.createPackValueHistory = async (req, res)=>{
    const {value, startData, idPack} = req.body;
    console.log(value, startData, endData, idPack);

    const data = await packValueHistory.create({
        V: 1 ,
        value:value,
        startData:startData,
        idPack:idPack
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

controller.listPackValueHistory = async (req, res) => {
    const data = await packValueHistory.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findPackValueHistory = async (req, res) =>{
    const {idValue} = req.params;
    console.log(idValue);

    const data = await packValueHistory.findAll({
        where:{idValue: idValue},
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

controller.updatePackValueHistory = async (req,res) =>{
    const {idValue} = req.params;
    console.log(idValue);

    const {value, startData, endData} = req.body;
    console.log(value, startData, endData);

    const data = await packValueHistory.update({
        value:value,
        startData:startData,
        endData:endData
    },{
        where:{idValue:idValue}
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

controller.deletePackValueHistory = async (req,res) =>{
    const {idValue} = req.params;
    console.log(idValue);

    const data = await packValueHistory.update({
        V:0
    },{
        where:{idValue:idValue}
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