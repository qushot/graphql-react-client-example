import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080',
    cache: new InMemoryCache()
})

client
    .query({
        query: gql`
        query {
            todos {
                id,
                text,
                done
            }
        }
        `
    })
    .then(result => console.log(result));

// TODO: このへんまでやった https://www.apollographql.com/docs/react/get-started#2-initialize-apolloclient

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
