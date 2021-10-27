const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
    {

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'event'
    }
);

module.exports = Event;