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
        console.log("asking for todos");
        return todos;
    }
    catch (error) {
        throw error;
    }
};
const createTodo = (_, { todoInput }) => {
    const { name, status } = todoInput;
    try {
        const newTodo = { name, status, id: todos.length + 1 };
        todos.push(newTodo);
        return newTodo;
    }
    catch (error) {
        throw error;
    }
};
const setTodoDone = (_, { todoId }) => {
    let todoIndex = todos.findIndex((todo) => todo.id === todoId);
    console.log("todoIndex", todoIndex);
    try {
        todos[todoIndex].status = "done";
        return todos[todoIndex];
    }
    catch (error) {
        throw error;
    }
};
const deleteTodo = (_, { todoId }) => {
    const todosCopy = [...todos];
    const todoToDelete = todosCopy.filter((todo) => todo.id === todoId);
    try {
        if (todosCopy.filter((todo) => todo.id === todoId).length) {
            todos = todos.filter((todo) => todo.id !== todoId);
            return todoToDelete[0];
        }
    }
    catch (error) {
        throw error;
    }
};
exports.Queries = { getTodos };
exports.Mutations = { createTodo, setTodoDone, deleteTodo };
//# sourceMappingURL=resolvers.js.map