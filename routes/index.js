const express = require('express');
const categoriesRoutes = require('./categoriesRoutes');
const usersRoutes = require('./usersRoutes');
const carsRoutes = require('./carsRoutes'); 
const rentalRoutes = require('./rentalRoutes');

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/categories', categoriesRoutes);
router.use('/cars', carsRoutes);
router.use('/rental', rentalRoutes);

module.exports = router;
