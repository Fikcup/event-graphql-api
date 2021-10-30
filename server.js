const express = require('express');
const sequelize = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');

const models = require('./models');
const { typeDefs, resolvers } = require('./schemas');
const { graphql } = require('graphql');

const app = express();
const PORT = process.env.PORT || 3001;

async function startApolloServer(typeDefs, resolvers) {
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    server.applyMiddleware({ app });

    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
}

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
        startApolloServer(typeDefs, resolvers);
    })
});