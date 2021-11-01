const Customer = require('./Customer');
const Event = require('./Event');
const EventType = require('./EventType');
const Reservation = require('./Reservation');

Customer.hasMany(Reservation, {foreignKey: { allowNull: true }, onDelete: 'CASCADE'});
Event.hasMany(Reservation, {foreignKey: { allowNull: false }});
Event.hasOne(EventType, {foreignKey: { allowNull: false }});

module.exports = { Customer, Event, EventType, Reservation };