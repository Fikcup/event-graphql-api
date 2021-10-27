const { gql } = require('graphql');

const typeDefs = gql`
    type Customer {
        _id: ID!
        name: String!
        phone: String!
        email: String!
        address: String!
    }

    type Event {
        _id: ID!
        name: String!
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
`;

module.exports = typeDefs;