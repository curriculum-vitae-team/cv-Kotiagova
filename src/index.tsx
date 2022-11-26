import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import App from '@/App'
import 'antd/dist/antd.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from '@/store'

const client = new ApolloClient({
  uri: 'https://cv-gen-be.herokuapp.com/api/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)
