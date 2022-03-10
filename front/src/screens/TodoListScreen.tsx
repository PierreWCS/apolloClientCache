import {useQuery} from '@apollo/client';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';

import Todo from '../components/Todo';
import {GET_TODOS} from '../graphql/typeDefs';

export interface TodoType {
  name: string;
  status: string;
  id: string;
}

const TodoListScreen = () => {
  const {data} = useQuery(GET_TODOS);

  return (
    <Container>
      <Spacer />

      <Title>Todo list</Title>
      {data?.getTodos && (
        <TodoList>
          {data?.getTodos.map((todo: TodoType) => (
            <Todo key={todo.name} todo={todo} />
          ))}
        </TodoList>
      )}
    </Container>
  );
};

export default TodoListScreen;

const Container = styled(View)`
  height: 100%;
  width: 100%;
  padding-top: 70px;
  padding-horizontal: 20px;
  background-color: #253c78;
`;

const Title = styled(Text)`
  color: #ffeecf;
  font-size: 26px;
  font-weight: 600;
`;

const TodoList = styled(ScrollView)`
  padding-top: 20px;
  margin-bottom: 20px;
`;

const Spacer = styled(View)`
  height: 25px;
`;
