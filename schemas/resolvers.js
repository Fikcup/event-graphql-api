const { Customer, Event, EventType, Reservation } = require('../models/index');

const resolvers = {
    Query: {
        async getAllCustomers() {
            const customerData = await Customer.findAll()

            return customerData;
        },
    },
};

module.exports = resolvers;