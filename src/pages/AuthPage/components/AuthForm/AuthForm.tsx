import { AuthErrorResponse, auth_errors } from '@/errors/auth_errors'
import { LOGIN_QUERY } from '@/GraphQL/queries'
import { Container, InnerContainer } from '@/pages/AuthPage/AuthPage.styles'
import { actionCreators } from '@/state'
import { DocumentNode, useLazyQuery, useMutation } from '@apollo/client'
import { Button, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'

type AuthProps = {
  btnText: string
  authQuery: DocumentNode
}

const AuthForm: React.FC<AuthProps> = ({ btnText, authQuery }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { setUser } = bindActionCreators(actionCreators, dispatch)

  let executeQuery
  if (authQuery === LOGIN_QUERY) {
    ;[executeQuery, {}] = useLazyQuery(authQuery)
  } else {
    ;[executeQuery, {}] = useMutation(authQuery)
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

      localStorage.setItem('user', JSON.stringify(data.signup))
    }
    navigate('/employees')
  }

  const handleBadResponse = (responseError: any) => {
    const possibleErrors = []
    for (const e of auth_errors.keys()) {
      possibleErrors.push(e)
    }
    const fullError: AuthErrorResponse = { type: 'email', message: '' }

    possibleErrors.forEach((error) => {
      if (responseError.includes(error)) {
        fullError.type = auth_errors.get(error).type
        fullError.message = auth_errors.get(error).message
      }
    })

    switch (fullError.type) {
      case 'email': {
        setEmailError(fullError.message)
        break
      }
      case 'password': {
        setPasswordError(fullError.message)
        break
      }
      case 'both': {
        setEmailError(fullError.message)
        setPasswordError(fullError.message)
        break
      }
    }
  }

  const handleClick = () => {
    executeQuery({
      variables: { auth: { email: email, password: password } }
    })
      .then((response) => {
        console.log(response)
        if (response.data?.login || response.data?.signup) {
          handleGoodResponse(response)
        } else {
          const responseError = response.error.graphQLErrors[0].message
          handleBadResponse(responseError)
        }
      })
      .catch((error) => {
        const responseError = error.message
        handleBadResponse(responseError)
      })
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user')) !== null) navigate('/employees')
  }, [])

  return (
    <Container>
      <h1>CV-generator</h1>
      <label>
        {'Username'}
        <Input
          type='email'
          value={email}
          status={emailError && 'error'}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </label>
      <label>
        {'Password'}
        <Input.Password
          value={password}
          status={passwordError && 'error'}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </label>
      <InnerContainer>
        <label>
          <input type='checkbox' name='remember_me' defaultChecked />
          Remember me
        </label>
        <Button type='link'>Forgot your password?</Button>
      </InnerContainer>
      <Button type='primary' onClick={handleClick}>
        {btnText}
      </Button>
    </Container>
  )
}

export default AuthForm
