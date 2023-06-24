const express = require('express');
const router = express.Router();

const  varsControllers = 
require('../controllers/var.controller');

router.get('/', varsControllers.listVar);
router.post('/create', varsControllers.createVars)

module.exports = router;