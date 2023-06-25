const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/user.controller');


router.get('/', usersControllers.listUser);
router.get('/:idUser', usersControllers.findUser);
router.post('/create', usersControllers.createUser);
router.put('/update/:idUser', usersControllers.updateUser);
router.get('/delete/:idUser', usersControllers.deleteUser);



module.exports = router;
