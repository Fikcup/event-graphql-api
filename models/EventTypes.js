const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class EventType extends Model {}

EventType.init(
    {

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'eventtype'
    }
);

module.exports = EventType;