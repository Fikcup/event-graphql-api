const { Customer, Event, EventType, Reservation } = require('../models/index');

const resolvers = {
    Query: {
        async getAllCustomers() {
            const customerData = await Customer.findAll()

            return customerData;
        },
        async getAllReservations() {
            const reservationData = await Reservation.findAll()

            return reservationData;
        },
        async getAllEvents() {
            const eventData = await Event.findAll();

            return eventData;
        },
    },

    Mutation: {
        async addCustomer(parent, args) {
            const newCustomer = args;
            const customerData = Customer.create(newCustomer);

            return customerData;
        },
        async addReservation(parent, args) {
            const newReservation = args;
            const reservationData = Reservation.create(newReservation);

            return reservationData;
        }
    },
};

module.exports = resolvers;