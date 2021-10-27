const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Reservation extends Model {}

Reservation.init(
    {

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservation'
    }
);

module.exports = Reservation;