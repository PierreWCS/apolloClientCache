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

export {GET_TODOS, ADD_TODO};
