"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const resolvers_1 = require("../todos/resolvers");
exports.resolvers = {
    Query: Object.assign({}, resolvers_1.Queries),
    Mutation: Object.assign({}, resolvers_1.Mutations),
};
//# sourceMappingURL=resolvers.js.map