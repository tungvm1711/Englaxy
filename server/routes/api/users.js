const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users');

router.post('/login', userController.login);
router.use('/logout', userController.logout);
router.post('/register', userController.createUser);
router.use('/getallusers', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.get('/profile/:id', userController.getUserProfile);
router.get('/follow', userController.followUser);
router.post('/registeruser', userController.addUser);
router.get('/manageuser/getalluser', userController.getAllUsers);
router.post('/manageuser/:id', userController.getUserJson);
router.post('/manageuser/:id', userController.editUser);
router.post('/manageuser/:id', userController.deleteUser);

module.exports = router;