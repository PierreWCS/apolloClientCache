import {useMutation, useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {todosVar} from '../../App';
import Todo from '../components/Todo';

import {GET_ME, UPDATE_USER} from '../graphql/typeDefs';

export interface TodoType {
  name: string;
  status: string;
  id: string;
}

const UpdateUserScreen = () => {
  const {data} = useQuery(GET_ME);
  const [updateUser] = useMutation(UPDATE_USER);
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');

  return (
    <Container>
      <Spacer />
      <Title>Update user</Title>
      <Text>Firstname</Text>
      <TextInput value={firstname} onChangeText={setFirstname} />
      <Text>Lastname</Text>
      <TextInput value={lastname} onChangeText={setLastname} />
      <TouchableOpacity
        onPress={() => updateUser({variables: {firstname, lastname}})}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <Spacer />
      <Spacer />
      <Text style={{color: 'red', fontSize: 20}}>
        {data && data.getMe && data.getMe.firstname}
      </Text>
      <Text style={{color: 'red', fontSize: 20}}>
        {data && data.getMe && data.getMe.lastname}
      </Text>
    </Container>
  );
};

export default UpdateUserScreen;

const Container = styled(View)`
  height: 100%;
  width: 100%;
  padding-top: 70px;
  padding-horizontal: 20px;
`;

const Title = styled(Text)`
  font-size: 26px;
  font-weight: 600;
`;

const TodoList = styled(View)`
  padding-top: 20px;
`;

const Spacer = styled(View)`
  height: 25px;
`;
