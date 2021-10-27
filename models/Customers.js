const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Customer extends Model {}

Customer.init(
    {

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'customer'
    }
);

module.exports = Customer;