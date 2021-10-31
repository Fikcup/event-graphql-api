const { Customer, Event, EventType, Reservation } = require('../models/index');

const resolvers = {
    Query: {
        async getAllCustomers() {
            const customerData = await Customer.findAll()

            return customerData;
        },
    },

    Mutation: {
        // TODO: get foreign key values into GraphQL
        async addCustomer(parent, args) {
            const newCustomer = args;
            const customerData = Customer.create(newCustomer);

            return customerData;
        }
    },
};

module.exports = resolvers;