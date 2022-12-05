import { Button, Input, notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { LOGIN_QUERY } from '@/GraphQL/queries'
import { Container, InnerContainer } from '@/pages/AuthPage/AuthPage.styles'
import { actionCreators } from '@/state'
import { DocumentNode, useLazyQuery, useMutation } from '@apollo/client'

type AuthProps = {
  btnText: string
  authQuery: DocumentNode
}

const AuthForm: React.FC<AuthProps> = ({ btnText, authQuery }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRememberUser, setShouldRememberUser] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [api, contextHolder] = notification.useNotification()

  const { setUser } = bindActionCreators(actionCreators, dispatch)

  let executeQuery, error
  if (authQuery === LOGIN_QUERY) {
    ;[executeQuery, { error }] = useLazyQuery(authQuery)
  } else {
    ;[executeQuery, { error }] = useMutation(authQuery)
  }

  const openNotification = () => {
    api.error({
      message: `There was an error!`,
      description: `${error ?? 'Try again with other credentials'}`,
      placement: 'bottomLeft'
    })
  }

  const handleGoodResponse = ({ data }) => {
    if (authQuery === LOGIN_QUERY) {
      const {
        user: { email, id, is_verified },
        access_token
      } = data.login

      setUser({
        email,
        id,
        access_token,
        is_verified
      })

      if (!shouldRememberUser) {
        window.addEventListener('beforeunload', () => {
          localStorage.removeItem('user')
        })
      }

      localStorage.setItem('user', JSON.stringify(data.login))
    } else {
      const {
        user: { email, id, is_verified },
        access_token
      } = data.signup

      setUser({
        email,
        id,
        access_token,
        is_verified
      })

      if (shouldRememberUser) {
        localStorage.setItem('user', JSON.stringify(data.signup))
      }
    }

    navigate('/employees')
  }

  const executeAuthQuery = () => {
    executeQuery({
      variables: { auth: { email: email, password: password } }
    })
      .then((response) => {
        if (response.data?.login || response.data?.signup) {
          handleGoodResponse(response)
        } else {
          openNotification()
        }
      })
      .catch((error) => {
        console.error(error)
        openNotification()
      })
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user')) !== null) navigate('/employees')
  }, [])

  return (
    <Container>
      {contextHolder}
      <h1>CV-generator</h1>
      <label>
        {'Username'}
        <Input
          type='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </label>
      <label>
        {'Password'}
        <Input.Password
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </label>
      <InnerContainer>
        <label>
          <input
            type='checkbox'
            name='remember_me'
            onChange={() => setShouldRememberUser((prevA) => !prevA)}
            checked={shouldRememberUser}
          />
          Remember me
        </label>
      </InnerContainer>
      <Button type='primary' onClick={executeAuthQuery}>
        {btnText}
      </Button>
    </Container>
  )
}

export default AuthForm
