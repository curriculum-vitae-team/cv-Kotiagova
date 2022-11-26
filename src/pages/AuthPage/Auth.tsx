import AppInput from '@/components/UI/inputs/AppInput/AppInput'
import { AuthErrorResponse, auth_errors } from '@/errors/auth_errors'
import { LOGIN_QUERY } from '@/gql/LOGIN_QUERY'
import { Container, InnerContainer } from '@/pages/AuthPage/AuthPage.styles'
import { setUser } from '@/store/slices/userSlice'
import { useLazyQuery, useMutation } from '@apollo/client'
import { Button } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

type AuthProps = {
  btnText: string
  authQuery: any
}

const Auth: React.FC<AuthProps> = (props: AuthProps) => {
  const { btnText, authQuery } = { ...props }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let executeQuery
  if (authQuery === LOGIN_QUERY) {
    ;[executeQuery, {}] = useLazyQuery(authQuery)
  } else {
    ;[executeQuery, {}] = useMutation(authQuery)
  }

  function handleEmailInput(value: string) {
    setEmail(value)
  }
  function handlePasswordInput(value: string) {
    setPassword(value)
  }

  function handleGoodResponse(response: any) {
    if (authQuery === LOGIN_QUERY) {
      dispatch(
        setUser({
          email: response.data.login.user.email,
          id: response.data.login.user.id,
          access_token: response.data.login.access_token
        })
      )
    } else {
      dispatch(
        setUser({
          email: response.data.signup.user.email,
          id: response.data.signup.user.id,
          access_token: response.data.signup.access_token
        })
      )
    }
    navigate('/employees')
  }

  function handleBadResponse(responseError: any) {
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

  return (
    <Container>
      <h1>CV-generator</h1>
      <AppInput
        label={'Username'}
        onChange={handleEmailInput}
        errorText={emailError}
        status={emailError ? 'error' : ''}
      />
      <AppInput
        label={'Password'}
        onChange={handlePasswordInput}
        type={'password'}
        errorText={passwordError}
        status={passwordError ? 'error' : ''}
      />
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

export default Auth
