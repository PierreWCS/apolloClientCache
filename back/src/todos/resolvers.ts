/** @format */

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
  } catch (error) {
    throw error;
  }
};

interface CreateTodoInput {
  todoInput: {
    status: string;
    name: string;
  };
}

const createTodo = (_: any, { todoInput }: CreateTodoInput) => {
  const { name, status } = todoInput;
  try {
    todos.push({ name, status, id: todos.length + 1 });
    return todos;
  } catch (error) {
    throw error;
  }
};

export const Queries = { getTodos };
export const Mutations = { createTodo };
