const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Reservation extends Model {}

Reservation.init(
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        eventDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        headCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservation'
    }
);

module.exports = Reservation;