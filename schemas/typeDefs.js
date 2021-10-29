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
        getAllEvents(): [Event]
        getOneEvent(id: ID!): Event
        getAllEventTypes(): [EventType]
        getOneEventType(id: ID!): EventType
    }

    type Mutation {
        addReservation(eventDate: String!, description: String!, customerID: ID!, eventID: ID!): Reservation
        addEvent(name: String!, eventTypeID: ID!, customerID: ID!, reservationID: ID!): Event
        addEventType(name: String!, description: String!): EventType
    }
`);

module.exports = typeDefs;