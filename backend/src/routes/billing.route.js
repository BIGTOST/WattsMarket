const express = require('express');
const router = express.Router();

const billing = require('../controllers/billing.controller');


router.get('/', billing.listBilling);
router.get('/:idTransaction', billing.findBilling);
router.post('/create', billing.createBilling);
router.put('/update/:idTransaction', billing.updateBilling);
router.get('/delete/:idTransaction', billing.deleteBilling);


module.exports = router;