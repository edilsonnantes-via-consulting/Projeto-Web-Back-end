const express = require('express');
const rentalController = require('../controllers/rentalController');

const router = express.Router();

router.get('/', rentalController.listRental);

router.get('/:id', rentalController.getRentalById);

router.post('/', rentalController.createNewRental);

router.put('/:id', rentalController.updateRental);

router.delete('/:id', rentalController.deleteRental);

module.exports = router;