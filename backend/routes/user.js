const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();


router.get('/getUsers', userController.getUsers);

router.post('/addUser', userController.postUser);

router.get('/editUser/:email', userController.getEditUser);

router.post('/deleteUser', userController.postDeleteUser);

module.exports = router;
