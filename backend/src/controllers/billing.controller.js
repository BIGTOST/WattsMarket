const billing = request('../models/billing.model.js');
const controller = {};

controller.createBilling = async (req, res)=>{
    const {billingMonth,value,dueDate,payment} = req.body;
    console.log({billingMonth,value,dueDate,payment});

    const data = await billing.create({
        V: 1 ,
        billingMonth:billingMonth,
        value:value,
        dueDate:dueDate,
        payment:payment
    })
    .then(function(data){
        return data
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

controller.listBilling = async (req, res) => {
    const data = await billing.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findBilling = async (req, res) =>{
    const {idTransaction} = req.params;

    const data = await billing.findAll({
        where:{idTransaction: idTransaction}
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

controller.updateBilling = async (req,res) =>{
    const {idTransaction} = req.params;

    const {billingMonth, value,dueDate,payment} = req.body;
    console.log(inflationMax, productionCap);

    const data = await billing.update({
        billingMonth:billingMonth,
        value:value,
        dueDate:dueDate,
        payment:payment
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

controller.deletBilling = async (req,res) =>{
    const {idTransaction} = req.params;
    console.log(idTransaction);
    
    const data = await billing.update({
        V:0
    },{
        where:{idTransaction:idTransaction}
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