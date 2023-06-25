const production = require('../models/production.model');

const controller = {};

controller.createProduction = async (req, res)=>{
    const {productionMonth,productionKW,idInfrastructure} = req.body;
    console.log(productionMonth,productionKW,idInfrastructure);

    const data = await production.create({
        V: 1 ,
        productionMonth:productionMonth,
        productionKW:productionKW,
        idInfrastructure:idInfrastructure
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

controller.listProduction = async (req, res) => {
    const data = await production.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findProduction = async (req, res) =>{
    const {idProduction} = req.params;
    console.log(idProduction);

    const data = await production.findAll({
        where:{idProduction: idProduction},
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

controller.updateProduction = async (req,res) =>{
    const {idProduction} = req.params;
    console.log(idProduction);

    const {productionMonth,productionKW} = req.body;
    console.log(productionMonth,productionKW);

    const data = await production.update({
        productionMonth:productionMonth,
        productionKW:productionKW,
    },{
        where:{idProduction:idProduction}
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

controller.deleteProduction = async (req,res) =>{
    const {idProduction} = req.params;
    console.log(idProduction);

    const data = await production.update({
        V:0
    },{
        where:{idProduction:idProduction}
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