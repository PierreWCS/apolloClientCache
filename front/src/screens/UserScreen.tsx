import {useMutation, useQuery} from '@apollo/client';
import React, {useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {GET_ME} from '../graphql/typeDefs';

const UserScreen = () => {
  const {data} = useQuery(GET_ME);

  return (
    <Container>
      <Spacer />
      <Title>User</Title>
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

export default UserScreen;

const Container = styled(View)`
  height: 100%;
  width: 100%;
  padding-top: 70px;
  padding-horizontal: 20px;
  background-color: #253c78;
`;

const Spacer = styled(View)`
  height: 25px;
`;

const Title = styled(Text)`
  color: #ffeecf;
  font-size: 26px;
  font-weight: 600;
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
