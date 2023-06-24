const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/user.controller');


router.get('/', (req,res)=>{
    res.send('rota do User,')
})
router.get('/listar',usersControllers.userList);

module.exports = router;
