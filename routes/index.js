const express = require('express');
const categoriesRoutes = require('./categoriesRoutes');
const usersRoutes = require('./usersRoutes');
const carsRoutes = require('./carsRoutes'); 

const router = express.Router();

router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);
router.use('/cars', carsRoutes);

module.exports = router;
