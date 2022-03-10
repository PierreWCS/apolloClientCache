/** @format */

import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Todo {
    id: Int!
    status: String!
    name: String!
  }

  type Query {
    getTodos: [Todo]!
  }

  type Mutation {
    createTodo(todoInput: TodoInput!): Todo
    setTodoDone(todoId: Int!): Todo
    deleteTodo(todoId: Int!): Todo
  }

  input TodoInput {
    status: String!
    name: String!
  }
`;
