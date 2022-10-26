import React from 'react'
import '@/App.css'

import AppCollapse from '@/components/UI/collapse/AppCollapse'
import DateInput from '@/components/UI/inputs/DatePicker/DateInput'
import AppInput from '@/components/UI/inputs/AppInput/AppInput'
import AppTextarea from '@/components/UI/inputs/AppTextarea/AppTextarea'

function App() {
  const panels = [
    { header: '111', body: <DateInput /> },
    { header: '2', body: <AppTextarea label={'kjv'} status={'error'} /> },
    {
      header: '3',
      body: <AppInput label={'hgfd'} placeholder={'dvb'} status={'error'} />
    },
    { header: '45345', body: <div style={{ backgroundColor: 'pink' }}>popok</div> }
  ]
  return (
    <div className='App'>
      <AppCollapse panels={panels} />
    </div>
  )
}

export default App
