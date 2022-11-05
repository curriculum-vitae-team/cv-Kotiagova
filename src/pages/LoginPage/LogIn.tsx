import React from 'react'
import { Container, InnerContainer } from '@/pages/LoginPage/LoginPage.styles'
import AppInput from '@/components/UI/inputs/AppInput/AppInput'
import AppButton from '@/components/UI/buttons/AppButton/AppButton'

type LogInProps = {
  btnText: string
  authHandler: any
}

const LogIn: React.FC<LogInProps> = (props: LogInProps) => {
  const { btnText, authHandler } = { ...props }
  return (
    <Container>
      <h1>CV-generator</h1>
      <AppInput label={'Username'} />
      <AppInput label={'Password'} />
      <InnerContainer>
        <label>
          <input type='checkbox' name='remember_me' checked />
          Remember me
        </label>
        <AppButton type={'link'} text={'Forgot your password?'} />
      </InnerContainer>
      <AppButton type={'primary'} text={btnText} />
    </Container>
  )
}

export default LogIn
