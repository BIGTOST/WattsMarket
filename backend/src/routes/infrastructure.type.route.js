const express = require('express');
const router = express.Router();

const infrastructureType = require('../controllers/infrastructure.type.controller');


router.get('/', infrastructureType.listInfrastructureType);
router.get('/:idInfrastructureType', infrastructureType.findInfrastructureType);
router.post('/create', infrastructureType.createInfrastructureType);
router.put('/update/:idInfrastructureType', infrastructureType.updateInfrastructureType);
router.get('/delete/:idInfrastructureType', infrastructureType.deleteInfrastructureType);



module.exports = router;