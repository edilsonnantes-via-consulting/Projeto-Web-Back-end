const express = require('express');
const carsController = require('../controllers/carsController');

const router = express.Router();

router.get('/', carsController.listCars);

router.get('/:id', carsController.getCarById);

router.post('/', carsController.createNewCar);

router.put('/:id', carsController.updateCarData);

router.delete('/:id', carsController.deleteCar);

module.exports = router;
