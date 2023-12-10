const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/', usersController.listUsers);

router.get('/:id', usersController.getUserById);

router.post('/', usersController.createNewUser);

router.put('/:id', usersController.updateUserData);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
