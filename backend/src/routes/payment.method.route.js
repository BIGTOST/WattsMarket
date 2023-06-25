const express = require('express');
const router = express.Router();

const paymentMethod = require('../controllers/payment.method.controller');


router.get('/', paymentMethod.listPaymentMethod);
router.get('/:idPaymentMethod', paymentMethod.findPaymentMethod);
router.post('/create', paymentMethod.createPaymentMethod);
router.put('/update/:idPaymentMethod', paymentMethod.updatePaymentMethod);
router.get('/delete/:idPaymentMethod', paymentMethod.deletePaymentMethod);



module.exports = router;