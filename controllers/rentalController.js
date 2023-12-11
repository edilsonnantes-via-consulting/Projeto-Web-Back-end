const Rental = require('../models/rentalModel');
const Car = require('../models/carModel');

const listRental = async (req, res) => {
    try {
      const rentals = await Rental.findAll();
      res.json(rentals);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const getRentalById = async (req, res) => {
  const rentalId = req.params.id;

  try {
    const rental = await Rental.findByPk(rentalId);
    if (!rental) {
      return res.status(404).json({ error: 'Categoria não encontrada!' });
    }
    res.json(rental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewRental = async (req, res) => {
  var { name, carId, userId, startDate, endDate } = req.body;
  
  const car = await Car.findByPk(carId);

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);


  const diffInMilliseconds = endDateObj - startDateObj;
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  
  const total = diffInDays * car.daily_rate;

  try {
    endDate = endDateObj;
    startDate = startDateObj;
    const rental = await Rental.create({ name, carId, userId, startDate, endDate, total });
    res.status(201).json(rental);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateRental = async (req, res) => {
  var { name, carId, userId, startDate, endDate } = req.body;
  const rentalId = req.params.id;
  
  const car = await Car.findByPk(carId);

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);


  const diffInMilliseconds = endDateObj - startDateObj;
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  
  const total = diffInDays * car.daily_rate;
  
  try {
    const rental = await rental.findByPk(rentalId);
    if (!rental) {
      return res.status(404).json({ error: 'Aluguel não encontrado!' });
    }
    
    endDate = endDateObj;
    startDate = startDateObj;
    await Rental.update({ name, carId, userId, startDate, endDate, total });
    res.json(rental);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteRental = async (req, res) => {
  const rentalId = req.params.id;

  try {
    const rental = await Rental.findByPk(rentalId);
    if (!rental) {
      return res.status(404).json({ error: 'Aluguel não encontrado!' });
    }

    await rental.destroy();
    res.json({ message: 'Aluguel excluído com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    listRental,
    getRentalById,
    createNewRental,
    updateRental,
    deleteRental
};