import React from 'react'
import reactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import {App} from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-sg.vercel.app/graphql'
})

reactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
