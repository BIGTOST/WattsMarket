const express = require('express');
const router = express.Router();

const contractType = require('../controllers/contract.type.controller');


router.get('/', contractType.listContractType);
router.get('/:idContractType', contractType.findContractType);
router.post('/create', contractType.createContractType);
router.put('/update/:idContractType', contractType.updateContractType);
router.get('/delete/:idContractType', contractType.deleteContractType);


module.exports = router;