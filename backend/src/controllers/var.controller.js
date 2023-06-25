const vars = require('../models/Vars.model');

const controller = {};

controller.createVars = async (req, res)=>{
    const {inflationMax, productionCap} = req.body;
    console.log({inflationMax, productionCap});

    const data = await vars.create({
        V: 1 ,
        inflationMax:inflationMax,
        productionCap:productionCap
    })
    .then(function(data){
        return data
    })
    .catch(error=>{
        console.log('Erro: ' + error);
        return error
    })
    res.status(200).json({
        success:true,
        message: 'Criado',
        data: data
    });
}

controller.listVar = async (req, res) => {
    const data = await vars.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data})
}

controller.updateVar = async (req,res) =>{
    const {idVar} = req.params;

    const {inflationMax, productionCap} = req.body
    console.log(inflationMax, productionCap);

    const data = await vars.update({
        inflationMax:inflationMax,
        productionCap:productionCap
    },{
        where:{idVar:idVar}
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

controller.deletVar = async (req,res) =>{
    const {idVar} = req.params;

    const data = await vars.update({
        V:0
    },{
        where:{idVar:idVar}
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


module.exports = controller