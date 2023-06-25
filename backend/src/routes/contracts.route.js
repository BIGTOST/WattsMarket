const express = require('express');
const router = express.Router();

const contract = require('../controllers/contracts.controller');


router.get('/', contract.listContract);
router.get('/:idContract', contract.findContract);
router.post('/create', contract.createContract);
router.put('/update/:idContract', contract.updateContract);
router.get('/delete/:idContract', contract.deleteContract);


module.exports = router;