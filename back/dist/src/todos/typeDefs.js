"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
<<<<<<< HEAD
  type Todo {
    id: Int!
    status: String!
    name: String!
=======
  type User {
    id: String!
    firstname: String!
    lastname: String!
>>>>>>> 4ac4cdf (Add update user mutation)
  }

  type Query {
    getMe: User!
  }

  type Mutation {
<<<<<<< HEAD
    createTodo(todoInput: TodoInput!): Todo
<<<<<<< HEAD
    setTodoDone(todoId: Int!): Todo
    deleteTodo(todoId: Int!): Todo
=======
>>>>>>> 032876a (Add todo logic)
  }

  input TodoInput {
    status: String!
    name: String!
=======
    updateUser(firstname: String!, lastname: String!): User
>>>>>>> 4ac4cdf (Add update user mutation)
  }
`;
//# sourceMappingURL=typeDefs.js.map