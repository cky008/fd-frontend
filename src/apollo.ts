import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const isLoggedInVar = makeVar(false);

export const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? 'https://fdapi.iocky.com/graphql' : 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
        },
      },
    },
  }),
});