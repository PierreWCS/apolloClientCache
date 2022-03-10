import {useMutation} from '@apollo/client';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {DELETE_TODO, GET_TODOS, SET_TODO_DONE} from '../graphql/typeDefs';
import {TodoType} from '../screens/TodoListScreen';

interface TodoProps {
  todo: TodoType;
}
const Todo = ({todo}: TodoProps) => {
  const [setTodoDone] = useMutation(SET_TODO_DONE);
  const [deleteTodo] = useMutation(DELETE_TODO, {
    update(cache, {data}) {
      const newTodoFromResponse = data?.deleteTodo;
      const existingTodos = cache.readQuery({query: GET_TODOS});

      if (existingTodos) {
        cache.writeQuery({
          query: GET_TODOS,
          data: {
            // @ts-ignore
            getTodos: existingTodos?.getTodos.filter(
              (el: TodoType) => el.id !== newTodoFromResponse.id,
            ),
          },
        });
      }
    },
  });

  const handleDoneTodo = async () => {
    try {
      await setTodoDone({variables: {todoId: todo.id}});
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleDeleteTodo = async () => {
    try {
      await deleteTodo({variables: {todoId: todo.id}});
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <TodoContainer>
      <View>
        <TodoName>{todo.name}</TodoName>
        <TodoStatus>Status: {todo.status}</TodoStatus>
      </View>
      <EditButton onPress={handleDoneTodo}>
        <Text>Done</Text>
      </EditButton>
      <DeleteButton onPress={handleDeleteTodo}>
        <Text>Delete</Text>
      </DeleteButton>
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled(View)`
  border-radius: 7px;
  background-color: whitesmoke;
  margin-vertical: 5px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const TodoName = styled(Text)``;

const TodoStatus = styled(Text)``;

const EditButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  background-color: pink;
  border-radius: 7px;
`;

const DeleteButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  background-color: coral;
  border-radius: 7px;
`;
