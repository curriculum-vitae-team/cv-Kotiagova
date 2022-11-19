import React, { useState } from 'react'
import { Container, InnerContainer } from '@/pages/LoginPage/LoginPage.styles'
import AppInput from '@/components/UI/inputs/AppInput/AppInput'
import AppButton from '@/components/UI/buttons/AppButton/AppButton'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/slices/userSlice'
import { LOGIN_QUERY } from '@/gql/LOGIN_QUERY'
import { useNavigate } from 'react-router-dom'
import { auth_errors, AuthErrorResponse } from '@/errors/auth_errors'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error

type LogInProps = {
  btnText: string
  authQuery: any
}

const LogIn: React.FC<LogInProps> = (props: LogInProps) => {
  const { btnText, authQuery } = { ...props }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [AT, setAT] = useState('')
  // const [id, setId] = useState(0)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleEmailInput(value: string) {
    setEmail(value)
  }
  function handlePasswordInput(value: string) {
    setPassword(value)
  }

  let executeQuery
  if (authQuery === LOGIN_QUERY) {
    ;[executeQuery, {}] = useLazyQuery(authQuery)
  } else {
    ;[executeQuery, {}] = useMutation(authQuery)
  }

  const handleClick = () => {
    executeQuery({
      variables: { auth: { email: email, password: password } }
    })
      .then((response) => {
        if (response.data?.login || response.data?.signup) {
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
        } else {
          const responseError = response.error.graphQLErrors[0].message
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
          console.log(fullError)

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
      })
      .catch((error) => {
        const responseError = error.message
        const possibleErrors = []
        for (const e of auth_errors.keys()) {
          possibleErrors.push(e)
        }
        const fullError: AuthErrorResponse = { type: 'email', message: '' }

        possibleErrors.forEach((er) => {
          if (responseError.includes(er)) {
            fullError.type = auth_errors.get(er).type
            fullError.message = auth_errors.get(er).message
          }
        })
        console.log(fullError)

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
        <AppButton type={'link'} text={'Forgot your password?'} />
      </InnerContainer>
      <AppButton type={'primary'} text={btnText} onClick={handleClick} />
    </Container>
  )
}

export default LogIn
