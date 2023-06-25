const document = require('../models/document.model');

const controller = {};

controller.createDocument = async (req, res)=>{
    const {idContract} = req.body;
    console.log({idContract});

    const data = await document.create({
        V: 1 ,
        idContract:idContract
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

controller.listDocument = async (req, res) => {
    const data = await document.findAll()
    .catch(error=>{
        return error;
    });
    res.json({success:true, data:data});
}

controller.findDocument = async (req, res) =>{
    const {idDoc} = req.params;

    const data = await document.findAll({
        where:{idDoc: idDoc},
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

controller.updateDocument = async (req,res) =>{
    const {idDoc} = req.params;
    console.log(idDoc);

    const {idContract} = req.body;
    console.log(idContract);

    const data = await document.update({
        idContract:idContract
    },{
        where:{idDoc:idDoc}
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

controller.deleteDocument = async (req,res) =>{
    const {idDoc} = req.params;
    console.log(idDoc);

    const data = await document.update({
        V:0
    },{
        where:{idDoc:idDoc}
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