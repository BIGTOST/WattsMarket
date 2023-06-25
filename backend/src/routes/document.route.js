const express = require('express');
const router = express.Router();

const document = require('../controllers/document.controller');


router.get('/', document.listDocument);
router.get('/:idDoc', document.findDocument);
router.post('/create', document.createDocument);
router.put('/update/:idDoc', document.updateDocument);
router.get('/delete/:idDoc', document.deleteDocument);


module.exports = router;