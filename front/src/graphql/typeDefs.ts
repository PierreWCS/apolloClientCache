import {gql} from '@apollo/client';

const GET_TODOS = gql`
  query todos {
    getTodos {
      id
      status
      name
    }
  }
`;

const ADD_TODO = gql`
  mutation createTodo($status: String!, $name: String!) {
    createTodo(todoInput: {status: $status, name: $name}) {
      id
      status
      name
    }
  }
`;

const SET_TODO_DONE = gql`
  mutation setDoneTodo($todoId: Int!) {
    setTodoDone(todoId: $todoId) {
      id
      status
      name
    }
  }
`;

const GET_ME = gql`
  query getMe {
    getMe {
      id
      firstname
      lastname
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($todoId: Int!) {
    deleteTodo(todoId: $todoId) {
      id
      status
      name
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($firstname: String!, $lastname: String!) {
    updateUser(updateUserInput: {firstname: $firstname, lastname: $lastname}) {
      id
      firstname
      lastname
    }
  }
`;

export {GET_TODOS, ADD_TODO, GET_ME, UPDATE_USER, SET_TODO_DONE, DELETE_TODO};
