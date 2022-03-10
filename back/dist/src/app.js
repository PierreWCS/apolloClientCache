"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const apollo_server_1 = require("apollo-server");
const apollo_server_core_1 = require("apollo-server-core");
const schema_1 = require("@graphql-tools/schema");
const graphql_middleware_1 = require("graphql-middleware");
const app_config_1 = require("../app-config");
const graphql_1 = require("./graphql");
exports.server = new apollo_server_1.ApolloServer({
    cors: true,
    schema: (0, graphql_middleware_1.applyMiddleware)((0, schema_1.makeExecutableSchema)({ typeDefs: graphql_1.typeDefs, resolvers: graphql_1.resolvers })),
    plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
});
exports.server.listen(app_config_1.PORT).then(({ url }) => {
    console.log(`🚀  Server ready BOYYY at ${url}`);
});
//# sourceMappingURL=app.js.map