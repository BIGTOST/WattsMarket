const express = require('express');
const router = express.Router();
//const middleware = require('../middleware');

const usersControllers = require('../controllers/user.controller');


router.get('/', usersControllers.listUser);
router.get('/:idUser', usersControllers.findUser);
router.get('/email/:email', usersControllers.findEmail)
router.post('/registrar', usersControllers.createUser);
router.post('/login', usersControllers.login);
router.put('/update/:idUser', usersControllers.updateUser);
router.put('/delete/:idUser', usersControllers.deleteUser);



module.exports = router;
