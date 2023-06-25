const pack = require('../models/pack.model');

const controller = {};

controller.createPack = async (req, res)=>{
    const {KW, value, valueData, vendor} = req.body;
    console.log(KW, value, valueData, vendor);

    const data = await pack.create({
        V: 1 ,
        KW:KW,
        value:value,
        valueData:valueData,
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

controller.listPack = async (req, res) => {
    const data = await pack.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findPack = async (req, res) =>{
    const {idPack} = req.params;
    console.log(idPack);

    const data = await pack.findAll({
        where:{idPack: idPack},
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

controller.updatePack = async (req,res) =>{
    const {idPack} = req.params;
    console.log(idPack);

    const {KW,value,valueData} = req.body;
    console.log(KW,value,valueData);

    const data = await pack.update({
        KW:KW,
        value:value,
        valueData:valueData
    },{
        where:{idPack:idPack}
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

controller.deletePack = async (req,res) =>{
    const {idPack} = req.params;
    console.log(idPack);

    const data = await pack.update({
        V:0
    },{
        where:{idPack:idPack}
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