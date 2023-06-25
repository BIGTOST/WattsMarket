const express = require('express');
const router = express.Router();

const packValueHistory = require('../controllers/pack.value.history.controller');


router.get('/', packValueHistory.listPackValueHistory);
router.get('/:idValue', packValueHistory.findPackValueHistory);
router.post('/create', packValueHistory.createPackValueHistory);
router.put('/update/:idValue', packValueHistory.updatePackValueHistory);
router.get('/delete/:idValue', packValueHistory.deletePackValueHistory);



module.exports = router;