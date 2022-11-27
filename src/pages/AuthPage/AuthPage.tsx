import Language from '@/components/icons/Language'
import Question from '@/components/icons/Question'
import AppTabs from '@/components/UI/tabs/AppTabs'
import { LOGIN_QUERY } from '@/gql/LOGIN_QUERY'
import { REGISTER_MUTATION } from '@/gql/REGISTER_MUTATION'
import Auth from '@/pages/AuthPage/Auth'
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
            <Auth btnText={'Login'} authQuery={LOGIN_QUERY} />,
            <Auth btnText={'Register'} authQuery={REGISTER_MUTATION} />
          ]}
        />
      </TabsContainer>
    </Wrapper>
  )
}

export default AuthPage
