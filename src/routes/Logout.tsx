import { ApolloConsumer } from '@apollo/client'
import React from 'react'
import { Navigate } from 'react-router-dom'

export default () => (
  <ApolloConsumer>
    {(client) => {
      client.clearStore()
      localStorage.removeItem('user')
      return <Navigate to={'/auth'} />
    }}
  </ApolloConsumer>
)
