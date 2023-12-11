const Car = require('../models/carModel');
const Category = require('../models/categoryModel');
const User = require('../models/userModel');
const Rental = require('../models/rentalModel');


const install = async (req, res) => {
  try {

    await User.bulkCreate([
        { name: "Edilson", username: "dilso01", password: "minhasenha123", driver_license: "3142543651345", admin: true },
        { name: "João Victor", username: "guido02", password: "minhasenha123", driver_license: "657345672543", admin: true },
        { name: "Maria", username: "mari01", password: "naoquerocolocarsenha123", driver_license: "6542635312" },
        { name: "Robson", username: "robinho01", password: "semsenha123", driver_license: "45132534256" },
        { name: "Ricardo", username: "rick01", password: "asenhamaisdificildomundo123", driver_license: "3245576546756" }
    ])
    
    const users = await User.findAll();

    await Category.bulkCreate([
      { name: 'Sedan', description: 'Carro de carroceria alongada' },
      { name: 'Hatch', description: 'Carro de carroceria encurtada' },
      { name: 'SUV', description: 'Carro de carroceria robusta' },
      { name: 'Coupe', description: 'Carro de carroceria pequena' },
      { name: 'Van', description: 'Carro para transpote de pessoas' },
    ]);

    const categories = await Category.findAll();

    await Car.bulkCreate([
        { name: "Civiv", description: "Carro da Honda", daily_rate: 98.50, license_plate: 'DGQ9I43', categoryId: categories[0].id, fine_amount: 42000, brand: 'Honda' },
        { name: "Astra", description: "Carro da GM", daily_rate: 47.68, license_plate: 'FPN4I23', categoryId: categories[1].id, fine_amount: 28000, brand: 'GM Chevrolet' },
        { name: "Nivus", description: "Carro da VW", daily_rate: 169.30, license_plate: 'ERM8E30', categoryId: categories[2].id, fine_amount: 120000, brand: 'VolksWagen' },
        { name: "Veloster", description: "Carro da Hyundai", daily_rate: 60.68, license_plate: 'BAR7E30', categoryId: categories[3].id, fine_amount: 60000, brand: 'Hyundai' },
        { name: "Zafira", description: "Carro da GM", daily_rate: 30.68, license_plate: 'BUU2R45', categoryId: categories[4].id, fine_amount: 30000, brand: 'GM Chevrolet' }
    ])

    const cars = await Car.findAll();

    await Rental.bulkCreate([
        { carId: cars[0].id, userId: users[0].id, startDate: "2023-12-08", endDate: "2023-12-13", total: 492.50 },
        { carId: cars[1].id, userId: users[1].id, startDate: "2023-12-09", endDate: "2023-12-20", total: 524.48 },
        { carId: cars[2].id, userId: users[2].id, startDate: "2023-12-10", endDate: "2023-12-27", total: 2878.10 },
        { carId: cars[3].id, userId: users[3].id, startDate: "2023-12-01", endDate: "2023-12-30", total: 1759.72 },
        { carId: cars[4].id, userId: users[4].id, startDate: "2023-12-05", endDate: "2023-12-10", total: 153.4 }
    ])

    res.json({ message: 'Instalação concluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  install,
};