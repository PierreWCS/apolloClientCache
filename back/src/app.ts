/** @format */

import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyMiddleware } from "graphql-middleware";
import cors from "cors";

import { PORT } from "../app-config";
import { resolvers, typeDefs } from "./graphql";

export const server = new ApolloServer({
  cors: true,
  schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers })),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready BOYYY at ${url}`);
});
