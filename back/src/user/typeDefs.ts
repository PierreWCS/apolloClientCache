/** @format */

import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: String!
    firstname: String!
    lastname: String!
  }

  type Query {
    getMe: User!
  }

  type Mutation {
    updateUser(updateUserInput: UpdateUserInput!): User
  }

  input UpdateUserInput {
    firstname: String!
    lastname: String!
  }
`;
