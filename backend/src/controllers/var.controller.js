const vars = require('../models/Vars.model');

const controller = {};

controller.createVars = async (req, res)=>{
    const {InflationMax, ProductionCap} = req.body;
    console.log({InflationMax, ProductionCap});

    const data = await vars.create({
        InflationMax:InflationMax,
        ProductionCap:ProductionCap
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

module.exports = controller