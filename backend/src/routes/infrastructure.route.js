const express = require('express');
const router = express.Router();

const infrastructure = require('../controllers/infrastructure.controller');


router.get('/', infrastructure.listInfrastructure);
router.get('/:idInfrastructure', infrastructure.findInfrastructure);
router.post('/create', infrastructure.createInfrastructure);
router.put('/update/:idInfrastructure', infrastructure.updateInfrastructure);
router.get('/delete/:idInfrastructure', infrastructure.deleteInfrastructure);


module.exports = router;