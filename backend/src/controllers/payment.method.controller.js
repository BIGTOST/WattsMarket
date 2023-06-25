const paymentMethod = require('../models/payment.method.model');

const controller = {};

controller.createPaymentMethod = async (req, res)=>{
    const {content} = req.body;
    console.log(content);

    const data = await paymentMethod.create({
        V: 1 ,
        content:content
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

controller.listPaymentMethod = async (req, res) => {
    const data = await paymentMethod.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findPaymentMethod = async (req, res) =>{
    const {idPaymentMethod} = req.params;
    console.log(idPaymentMethod);

    const data = await paymentMethod.findAll({
        where:{idPaymentMethod: idPaymentMethod},
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

controller.updatePaymentMethod = async (req,res) =>{
    const {idPaymentMethod} = req.params;
    console.log(idPaymentMethod);

    const {content} = req.body;
    console.log(content);

    const data = await paymentMethod.update({
        content:content
    },{
        where:{idPaymentMethod:idPaymentMethod}
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

controller.deletePaymentMethod = async (req,res) =>{
    const {idPaymentMethod} = req.params;
    console.log(idPaymentMethod);

    const data = await paymentMethod.update({
        V:0
    },{
        where:{idPaymentMethod:idPaymentMethod}
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