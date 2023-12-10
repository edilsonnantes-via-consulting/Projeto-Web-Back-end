const express = require('express');
const categoriesRoutes = require('./categoriesRoutes');
const usersRoutes = require('./usersRoutes');

const router = express.Router();

router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);

module.exports = router;
