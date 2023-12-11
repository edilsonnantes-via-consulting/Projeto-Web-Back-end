const Car = require('../models/carModel');

const listCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCarById = async (req, res) => {
  const carId = req.params.id;

  try {
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewCar = async (req, res) => {
  const {
    name,
    description,
    daily_rate,
    available,
    license_plate,
    categoryId,
    fine_amount,
    brand,
  } = req.body;

  try {
    const car = await Car.create({
      name,
      description,
      daily_rate,
      available,
      license_plate,
      categoryId,
      fine_amount,
      brand,
    });
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCarData = async (req, res) => {
  const carId = req.params.id;
  const {
    name,
    description,
    daily_rate,
    available,
    license_plate,
    categoryId,
    fine_amount,
    brand,
  } = req.body;

  try {
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado' });
    }

    await car.update({
      name,
      description,
      daily_rate,
      available,
      license_plate,
      categoryId,
      fine_amount,
      brand,
    });

    res.json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCar = async (req, res) => {
  const carId = req.params.id;

  try {
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado' });
    }

    await car.destroy();
    res.json({ message: 'Carro excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  listCars,
  getCarById,
  createNewCar,
  updateCarData,
  deleteCar,
};
