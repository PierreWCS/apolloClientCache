import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';

import AddTodoScreen from './src/screens/AddTodoScreen';
import TodoListScreen from './src/screens/TodoListScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import UserScreen from './src/screens/UserScreen';
import UpdateUserScreen from './src/screens/UpdateUserScreen';

export const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: cache,
});

export interface Todos {
  name: string;
  status: string;
  id: string;
}

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="TodoList" component={TodoListScreen} />
    <Tab.Screen name="AddTodo" component={AddTodoScreen} />
    <Tab.Screen name="User" component={UserScreen} />
    <Tab.Screen name="UpdateUser" component={UpdateUserScreen} />
  </Tab.Navigator>
);

export const todosVar = cache.makeVar<Todos[]>([]);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
