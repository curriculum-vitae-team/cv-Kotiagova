import React from 'react'
import Language from '@/components/icons/Language'
import Question from '@/components/icons/Question'
import { Wrapper, TabsContainer, QuestionBtn, LanguageBtn } from './AuthPage.styles'
import AppTabs from '@/components/UI/tabs/AppTabs'
import Auth from '@/pages/AuthPage/Auth'
import { LOGIN_QUERY } from '@/gql/LOGIN_QUERY'
import { REGISTER_MUTATION } from '@/gql/REGISTER_MUTATION'

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
