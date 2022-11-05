import React from 'react'
import AppInput from '@/components/UI/inputs/AppInput/AppInput'
import Language from '@/icons/Language'
import Question from '@/icons/Question'
import AppButton from '@/components/UI/buttons/AppButton/AppButton'
import { Wrapper, Container, QuestionBtn, LanguageBtn, InnerContainer } from './LoginPage.styles'

const LoginPage = () => {
  return (
    <Wrapper>
      <LanguageBtn>
        <Language />
      </LanguageBtn>
      <QuestionBtn>
        <Question />
      </QuestionBtn>
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
        <AppButton type={'primary'} text={'Login'} />
      </Container>
    </Wrapper>
  )
}

export default LoginPage
