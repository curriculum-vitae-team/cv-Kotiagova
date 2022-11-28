import App from '@/app/App'
import { store } from '@/state'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

const httpLink = createHttpLink({
  uri: 'https://cv-project-js.inno.ws/api/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
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
