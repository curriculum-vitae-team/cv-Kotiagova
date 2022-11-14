import React from 'react'
import Language from '@/components/icons/Language'
import Question from '@/components/icons/Question'
import { Wrapper, TabsContainer, QuestionBtn, LanguageBtn } from './LoginPage.styles'
import AppTabs from '@/components/UI/tabs/AppTabs'
import LogIn from '@/pages/LoginPage/LogIn'
import { LOGIN_QUERY } from '@/gql/LOGIN_QUERY'
import { REGISTER_QUERY } from '@/gql/REGISTER_QUERY'

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
            <LogIn btnText={'Login'} authQuery={LOGIN_QUERY} />,
            <LogIn btnText={'Register'} authQuery={REGISTER_QUERY} />
          ]}
        />
      </TabsContainer>
    </Wrapper>
  )
}

export default LoginPage
