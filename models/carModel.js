const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('./db');
const Category = require('./categoryModel');

const Car = sequelize.define('Car', {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  daily_rate: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  license_plate: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  categoryId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Category,
      key: 'id',
    },
  },
  fine_amount: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Car;
