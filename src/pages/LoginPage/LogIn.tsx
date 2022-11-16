import React, { useState } from 'react'
import { Container, InnerContainer } from '@/pages/LoginPage/LoginPage.styles'
import AppInput from '@/components/UI/inputs/AppInput/AppInput'
import AppButton from '@/components/UI/buttons/AppButton/AppButton'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/slices/userSlice'
import { LOGIN_QUERY } from '@/gql/LOGIN_QUERY'
import { redirect, useNavigate } from 'react-router-dom'

type LogInProps = {
  btnText: string
  authQuery: any
}

const LogIn: React.FC<LogInProps> = (props: LogInProps) => {
  const { btnText, authQuery } = { ...props }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [AT, setAT] = useState('')
  const [id, setId] = useState(0)
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

  function handleClick() {
    executeQuery({
      variables: { auth: { email: email, password: password } }
    })
      .then((response) => {
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
      })
      .catch((error) => console.log(error))
  }

  return (
    <Container>
      <h1>CV-generator</h1>
      <AppInput label={'Username'} onChange={handleEmailInput} />
      <AppInput label={'Password'} onChange={handlePasswordInput} type={'password'} />
      <InnerContainer>
        <label>
          <input type='checkbox' name='remember_me' checked />
          Remember me
        </label>
        <AppButton type={'link'} text={'Forgot your password?'} />
      </InnerContainer>
      <AppButton type={'primary'} text={btnText} onClick={handleClick} />
    </Container>
  )
}

export default LogIn
