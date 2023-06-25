const express = require('express');
const router = express.Router();

const profile = require('../controllers/profile.controller');

router.get('/', profile.listProfile);
router.get('/:idProfile', profile.findProfile);
router.post('/create', profile.createProfile);
router.put('/update/:idProfile', profile.updateProfile);
router.get('/delete/:idProfile', profile.deleteProfile);

module.exports = router;