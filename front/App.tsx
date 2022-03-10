import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import TodoScreen from './src/screens/TodoScreen';

export const cache = new InMemoryCache({
  typePolicies: {
    typeName: {
      fields: {
        fieldName: {
          read(existing) {
            // modify before read
          },
          merge(existing, incoming) {
            // modify before write
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: cache,
});

export interface Todos {
  name: string;
  status: string;
  id: string;
}

export const todosVar = cache.makeVar<Todos[]>([]);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <TodoScreen />
    </ApolloProvider>
  );
};

export default App;
