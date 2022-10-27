import React from 'react'
import css from './LoginPage.module.css'
import AppInput from '@/components/UI/inputs/AppInput/AppInput'
import LinkButton from '@/components/UI/buttons/LinkButton/LinkButton'
import PrimaryButton from '@/components/UI/buttons/PrimaryButton/PrimaryButton'
import Language from '@/icons/Language'
import Question from '@/icons/Question'

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <button className={css.languageBtn}>
        <Language />
      </button>
      <button className={css.questionBtn}>
        <Question />
      </button>
      <div className={css.container}>
        <h1>CV-generator</h1>
        <AppInput style={{ width: '25vw', height: '3,56vh' }} label={'Username'} />
        <AppInput style={{ width: '25vw', height: '3,56vh' }} label={'Password'} />
        <div className={css.string}>
          <label className={css.checkbox}>
            <input type='checkbox' name='remember_me' checked />
            Remember me
          </label>
          <div className={css.linkbtn}>
            <LinkButton text={'Forgot your password?'} />
          </div>
        </div>
        <PrimaryButton text={'Login'} />
      </div>
    </div>
  )
}

export default LoginPage
