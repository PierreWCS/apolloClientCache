"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const resolvers_1 = require("../todos/resolvers");
const resolvers_2 = require("../user/resolvers");
exports.resolvers = {
    Query: Object.assign(Object.assign({}, resolvers_1.Queries), resolvers_2.Queries),
    Mutation: Object.assign(Object.assign({}, resolvers_1.Mutations), { UserMutations: resolvers_2.Mutations }),
};
//# sourceMappingURL=resolvers.js.map