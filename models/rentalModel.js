const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('./db');
const User = require('./userModel');
const Car = require('./carModel');


const Rental = sequelize.define('Rental', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    carId: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        references: {
          model: Car,
          key: 'id',
        },
    },
    userId: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
    },
    startDate: {
      type:DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type:DataTypes.DATE,
      allowNull: false
    },
    total: {
      type:DataTypes.NUMBER,
      allowNull: false
    }
});

module.exports = Rental;