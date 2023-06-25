const jwt = require('jsonwebtoken');
const config = require('./config');

let checkToken = (req, res, next) =>{
    let token = req.headers['x-access-token'] ||
                req.headers['autorization'];
    if(token.startWith('Bearer')){
        token = token.slice(7, token.length);
    }

    if(token){
        jwt.verify(token, config.jwtSecret, (error, decoded)=>{
            if(error){
                return res.json({
                    success: false,
                    message:'o token não é valido.'
                });
            }
            else{
                req.decoded = decoded;
                next();
            }
        });
    }
    else{
        return res.json({
            success: false ,
            messageL:'Token Indisponivel.'
        });
    }
}

module.exports = {
    checkToken:checkToken
}
