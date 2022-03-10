/** @format */

import {
  Queries as TodoQueries,
  Mutations as TodoMutations,
} from "../todos/resolvers";

export const resolvers = {
  Query: { ...TodoQueries },
  Mutation: { ...TodoMutations },
};
