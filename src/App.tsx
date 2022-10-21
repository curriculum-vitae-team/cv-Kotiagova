import React from 'react'
import '@/App.css'
import PrimaryButton from '@/components/UI/buttons/PrimaryButton/PrimaryButton'
import DefaultButton from '@/components/UI/buttons/DefaultButton/DefaultButton'
import DashedButton from '@/components/UI/buttons/DashedButton/DashedButton'
import LinkButton from '@/components/UI/buttons/LinkButton/LinkButton'

function App() {
  return (
    <div className='App'>
      <PrimaryButton text={'erere'} />
      <DefaultButton text='derrhgch' block={true} />
      <DashedButton text='dfxcfgvbhlk;' />
      <LinkButton text='trryv' />
    </div>
  )
}

export default App
