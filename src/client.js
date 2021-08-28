import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

const {REACT_APP_TOKEN} = process.env

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = REACT_APP_TOKEN;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });
  
  export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
