import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import App from '@/app/App'
import { store } from '@/state/store'

const httpLink = createHttpLink({
  uri: 'https://cv-project-js.inno.ws/api/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const { access_token } = JSON.parse(localStorage.getItem('user') ?? '{}')

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: access_token ? `Bearer ${access_token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
