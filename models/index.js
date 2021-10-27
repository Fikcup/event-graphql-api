const Customer = require('./Customers');
const Event = require('./Events');
const EventType = require('./EventTypes');
const Reservation = require('./Reservation');

Customer.hasMany(Reservation, {foreignKey: { allowNull: false }});
Event.hasMany(Reservation, {foreignKey: { allowNull: false }});
Event.hasOne(EventType, {foreignKey: { allowNull: false }});
Event.hasOne(Customer, {foreignKey: { allowNull: false }});

module.exports = { Customer, Event, EventType, Reservation };