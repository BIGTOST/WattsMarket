const express = require('express');
const router = express.Router();

const  varsControllers = 
require('../controllers/var.controller');

router.get('/', varsControllers.listVar);
router.post('/create', varsControllers.createVars);
router.put('/update/:idVar', varsControllers.updateVar);
router.put('/delet/:idVar')

module.exports = router;