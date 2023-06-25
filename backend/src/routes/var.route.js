const express = require('express');
const router = express.Router();

const  varsControllers = 
require('../controllers/var.controller');

router.get('/', varsControllers.listVar);
router.get('/:idVar', varsControllers.findVar);
router.post('/create', varsControllers.createVars);
router.put('/update/:idVar', varsControllers.updateVar);
router.get('/delete/:idVar', varsControllers.deletVar);

module.exports = router;