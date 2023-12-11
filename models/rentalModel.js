const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('./db');
const User = require('./userModel');
const Car = require('./carModel');


const Rental = sequelize.define('Rental', {
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    carId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: Car,
          key: 'id',
        },
    },
    userId: {
        type: DataTypes.UUID,
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
      type:DataTypes.DECIMAL,
      allowNull: false
    }
});

Rental.belongsTo(User, {foreignKey: 'userId'});
Rental.belongsTo(Car, {foreignKey: 'carId'});

module.exports = Rental;