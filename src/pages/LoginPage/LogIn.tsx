import React, { useState } from 'react'
import { Container, InnerContainer } from '@/pages/LoginPage/LoginPage.styles'
import AppInput from '@/components/UI/inputs/AppInput/AppInput'
import AppButton from '@/components/UI/buttons/AppButton/AppButton'
import { useLazyQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/slices/userSlice'

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

  function handleEmailInput(value: string) {
    setEmail(value)
  }
  function handlePasswordInput(value: string) {
    setPassword(value)
  }
  const dispatch = useDispatch()
  const [executeQuery, { loading, error, data }] = useLazyQuery(authQuery)

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
      <AppButton
        type={'primary'}
        text={btnText}
        onClick={() => {
          executeQuery({
            variables: { auth: { email: email, password: password } }
          }).then((response) => {
            dispatch(
              setUser({
                email: response.data.login.user.email,
                id: response.data.login.user.id,
                access_token: response.data.login.access_token
              })
            )
          })
        }}
      />
    </Container>
  )
}

export default LogIn
