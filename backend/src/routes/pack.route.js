const express = require('express');
const router = express.Router();

const pack = require('../controllers/pack.controller');


router.get('/', pack.listPack);
router.get('/:idPack', pack.findPack);
router.post('/create', pack.createPack);
router.put('/update/:idPack', pack.updatePack);
router.get('/delete/:idPack', pack.deletePack);



module.exports = router;