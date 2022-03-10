"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutations = exports.Queries = void 0;
let todos = [
    {
        name: "Learn graphql",
        status: "done",
        id: 1,
    },
    {
        name: "Learn mongo",
        status: "in progress",
        id: 2,
    },
    {
        name: "Learn react",
        status: "todo",
        id: 3,
    },
];
const getTodos = () => {
    try {
        return todos;
    }
    catch (error) {
        throw error;
    }
};
const createTodo = (_, { todoInput }) => {
    const { name, status } = todoInput;
    try {
        todos.push({ name, status, id: todos.length + 1 });
        return todos;
    }
    catch (error) {
        throw error;
    }
};
exports.Queries = { getTodos };
exports.Mutations = { createTodo };
//# sourceMappingURL=resolvers.js.map