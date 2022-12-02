import Language from '@/components/icons/Language'
import Question from '@/components/icons/Question'
import AppTabs from '@/components/UI/tabs/AppTabs'
import { REGISTER_MUTATION } from '@/GraphQL/mutations'
import { LOGIN_QUERY } from '@/GraphQL/queries'
import AuthForm from '@/pages/AuthPage/components/AuthForm/AuthForm'
import React from 'react'
import { LanguageBtn, QuestionBtn, TabsContainer, Wrapper } from './AuthPage.styles'

const AuthPage: React.FC = () => {
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
            <AuthForm btnText={'Login'} authQuery={LOGIN_QUERY} />,
            <AuthForm btnText={'Register'} authQuery={REGISTER_MUTATION} />
          ]}
        />
      </TabsContainer>
    </Wrapper>
  )
}

export default AuthPage
