import {useMutation, useQuery} from '@apollo/client';
import React, {useEffect, useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {todosVar} from '../../App';
import Todo from '../components/Todo';

import {ADD_TODO, GET_TODOS} from '../graphql/typeDefs';

export interface TodoType {
  name: string;
  status: string;
  id: string;
}

const TodoScreen = () => {
  const [todoName, setTodoName] = useState<string>('');

  const inputRef = useRef();

  const {data} = useQuery(GET_TODOS);
  const [addTodo, {data: addTodoData}] = useMutation(ADD_TODO);

  console.log('addtododata', addTodoData);

  useEffect(() => {
    if (data) {
      console.log('data', data);

      todosVar(data.getTodos);
    }
  }, [data]);

  useEffect(() => {
    if (addTodoData) {
      console.log('addTodoData.createTodo', addTodoData.createTodo);
      todosVar(addTodoData.createTodo);
    }
  }, [addTodoData]);

  console.log('reactive variable', todosVar());

  const handleInputChange = (text: string) => {
    setTodoName(text);
  };

  const handleAddTodo = async () => {
    console.log('add todo');
    try {
      await addTodo({variables: {name: todoName, status: 'todo'}});
      // @ts-ignore
      inputRef?.current?.clear();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Container>
      <Title>Add a todo</Title>
      <View style={{flexDirection: 'row'}}>
        {/* @ts-ignore */}
        <AddTodoInput ref={inputRef} onChangeText={handleInputChange} />
        <AddTodoButton onPress={handleAddTodo}>
          <ButtonText>Add</ButtonText>
        </AddTodoButton>
      </View>

      <Spacer />

      <Title>Todo list</Title>
      {todosVar() && (
        <TodoList>
          {todosVar().map((todo: TodoType) => (
            <Todo key={todo.name} todo={todo} />
          ))}
        </TodoList>
      )}
    </Container>
  );
};

export default TodoScreen;

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

const TodoList = styled(View)`
  padding-top: 20px;
`;

const Spacer = styled(View)`
  height: 25px;
`;

const AddTodoInput = styled(TextInput)`
  background-color: lightgrey;
  padding-vertical: 10px;
  font-size: 16px;
  padding-horizontal: 20px;
  flex: 3;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

const AddTodoButton = styled(TouchableOpacity)`
  background-color: #2b59c3;
  padding: 15px;
  flex: 1;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
`;

const ButtonText = styled(Text)`
  text-align: center;
  color: white;
  font-weight: 600;
`;
