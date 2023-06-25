const express = require('express');
const router = express.Router();

const usersProfile = require('../controllers/user.profile.controller');


router.get('/', usersProfile.listUserProfile);
router.get('/:idUserProfile', usersProfile.findUserProfile);
router.post('/create', usersProfile.createUserProfile);
router.put('/update/:idUserProfile', usersProfile.updateUserProfile);
router.get('/delete/:idUserProfile', usersProfile.deleteUserProfile);



module.exports = router;
