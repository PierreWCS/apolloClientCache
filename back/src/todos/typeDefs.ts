/** @format */

import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Todo {
    id: String!
    status: String!
    name: String!
  }

  type Query {
    getTodos: [Todo]!
  }

  type Mutation {
    createTodo(todoInput: TodoInput!): Todo
  }

  input TodoInput {
    status: String!
    name: String!
  }
`;
