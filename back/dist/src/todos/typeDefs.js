"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
//# sourceMappingURL=typeDefs.js.map