const { gql } = require('apollo-server-express');

const typeDefs = gql`
    # Customer model
    type Customer {
        _id: ID!
        name: String!
        phone: String!
        email: String!
        address: String!
    }

    # Event model
    type Event {
        _id: ID!
        name: String!
        hasEventType: EventType!
        hasCustomer: Customer!
        hasReservation: [Reservation]
    }

    # EventType model
    type EventType {
        _id: ID!
        name: String!
        description: String!
    }

    # Reservation model
    type Reservation {
        _id: ID!
        eventDate: String!
        headCount: Int!
        hasCustomer: Customer!
    }

    # Queries
    type Query {
        getAllCustomers: [Customer!]!
        getOneCustomer(id: ID!): Customer!
        getAllReservations: [Reservation!]!
        getOneReservation(id: ID!): Reservation!
        getAllEvents: [Event!]!
        getOneEvent(id: ID!): Event!
        getAllEventTypes: [EventType!]!
        getOneEventType(id: ID!): EventType!
    }

    # Mutations
    type Mutation {
        addCustomer(name: String!, phone: String!, email: String!, address: String!): Customer!
        addReservation(eventDate: String!, headCount: Int!): Reservation!
        addEvent(name: String!, eventTypeID: ID!, customerID: ID!, reservationID: ID!): Event!
        addEventType(name: String!, description: String!): EventType!
    }
`;

module.exports = typeDefs;