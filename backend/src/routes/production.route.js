const express = require('express');
const router = express.Router();

const production = require('../controllers/production.controller');


router.get('/', production.listProduction);
router.get('/:idProduction', production.findProduction);
router.post('/create', production.createProduction);
router.put('/update/:idProduction', production.updateProduction);
router.get('/delete/:idProduction', production.deleteProduction);



module.exports = router;