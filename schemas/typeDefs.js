var { buildSchema } = require('graphql');

const typeDefs = buildSchema(`
    type Customer {
        _id: ID!
        name: String!
        phone: String!
        email: String!
        address: String!
        hasReservation: [Reservation]
    }

    type Event {
        _id: ID!
        name: String!
        hasEventType: EventType!
        hasCustomer: Customer!
        hasReservation: [Reservation]
    }

    type EventType {
        _id: ID!
        name: String!
        description: String!
    }

    type Reservation {
        _id: ID!
        eventDate: String!
        headCount: Int!
    }
    
    type Query {
        getAllReservations(): [Reservation]
        getOneReservation(id: ID!): Reservation
    }

    type Mutation {
        addReservation(eventDate: String!, description: String!, customerID: ID!, eventID: ID!): Reservation
    }
`);

module.exports = typeDefs;