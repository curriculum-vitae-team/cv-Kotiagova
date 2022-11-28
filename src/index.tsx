import App from '@/app/App'
import { store } from '@/store'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

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
