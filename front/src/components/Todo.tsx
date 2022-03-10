import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {TodoType} from '../screens/TodoListScreen';

interface TodoProps {
  todo: TodoType;
}
const Todo = ({todo}: TodoProps) => {
  console.log('todo in todo', todo);

  return (
    <TodoContainer>
      <TodoName>{todo.name}</TodoName>
      <TodoStatus>Status: {todo.status}</TodoStatus>
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled(View)`
  border-radius: 7px;
  background-color: whitesmoke;
  margin-vertical: 5px;
  padding: 20px;
`;

const TodoName = styled(Text)``;

const TodoStatus = styled(Text)``;
