import React from 'react'
import AppInput from '@/components/UI/inputs/AppInput/AppInput'
import Language from '@/icons/Language'
import Question from '@/icons/Question'
import AppButton from '@/components/UI/buttons/AppButton/AppButton'
import {
  Wrapper,
  TabsContainer,
  QuestionBtn,
  LanguageBtn,
  InnerContainer
} from './LoginPage.styles'
import AppTabs from '@/components/UI/tabs/AppTabs'
import LogIn from '@/pages/LoginPage/LogIn'

const LoginPage = () => {
  return (
    <Wrapper>
      <LanguageBtn>
        <Language />
      </LanguageBtn>
      <QuestionBtn>
        <Question />
      </QuestionBtn>
      <TabsContainer>
        <AppTabs
          titles={['Log In', 'Register']}
          contents={[
            <LogIn btnText={'Login'} authHandler={''} />,
            <LogIn btnText={'Register'} authHandler={''} />
          ]}
        />
      </TabsContainer>
    </Wrapper>
  )
}

export default LoginPage
