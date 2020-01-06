import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router } from 'react-router-dom';
import { createHttpLink } from 'apollo-link-http';
import App from './components/App';
import Config from './config';

// Apollo GraphQL client
const client = new ApolloClient({
  link: createHttpLink({
    uri: Config.gqlUrl,
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root'),
);
