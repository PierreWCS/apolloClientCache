/** @format */

import {
  Queries as TodoQueries,
  Mutations as TodoMutations,
} from "../todos/resolvers";

import {
  Queries as UserQueries,
  Mutations as UserMutations,
} from "../user/resolvers";

export const resolvers = {
  Query: { ...TodoQueries, ...UserQueries },
  Mutation: { ...TodoMutations, ...UserMutations },
};
