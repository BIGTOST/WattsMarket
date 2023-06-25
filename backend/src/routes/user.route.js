const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

const usersControllers = require('../controllers/user.controller');


router.get('/',middleware.checkToken, usersControllers.listUser);
router.get('/:idUser',middleware.checkToken, usersControllers.findUser);
router.post('/registrar', usersControllers.createUser);
router.post('/login', usersControllers.login);
router.put('/update/:idUser',middleware.checkToken, usersControllers.updateUser);
router.get('/delete/:idUser',middleware.checkToken, usersControllers.deleteUser);



module.exports = router;
