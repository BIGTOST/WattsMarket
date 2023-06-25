const express = require('express');
const router = express.Router();

const contractStatus = require('../controllers/contract.status.controller');


router.get('/', contractStatus.listContractStatus);
router.get('/:idContractStatus', contractStatus.findContractStatus);
router.post('/create', contractStatus.createContractStatus);
router.put('/update/:idContractStatus', contractStatus.updateContractStatus);
router.get('/delete/:idContractStatus', contractStatus.deleteContractStatus);


module.exports = router;