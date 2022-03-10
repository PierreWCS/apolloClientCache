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
    console.log("asking for todos");

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
    const newTodo = { name, status, id: todos.length + 1 };
    todos.push(newTodo);
    return newTodo;
  } catch (error) {
    throw error;
  }
};

interface SetTodoDoneInput {
  todoId: number;
}

const setTodoDone = (_: any, { todoId }: SetTodoDoneInput) => {
  let todoIndex = todos.findIndex((todo) => todo.id === todoId);
  console.log("todoIndex", todoIndex);

  try {
    todos[todoIndex].status = "done";
    return todos[todoIndex];
  } catch (error) {
    throw error;
  }
};

interface DeleteTodoInput {
  todoId: number;
}

const deleteTodo = (_: any, { todoId }: DeleteTodoInput) => {
  const todosCopy = [...todos];
  const todoToDelete = todosCopy.filter((todo) => todo.id === todoId);

  try {
    if (todosCopy.filter((todo) => todo.id === todoId).length) {
      todos = todos.filter((todo) => todo.id !== todoId);
      return todoToDelete[0];
    }
  } catch (error) {
    throw error;
  }
};

export const Queries = { getTodos };
export const Mutations = { createTodo, setTodoDone, deleteTodo };
