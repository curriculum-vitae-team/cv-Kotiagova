import React, { ChangeEventHandler } from 'react'
import { Input } from 'antd'
import { Wrapper } from './AppInput.styles'

type InputProps = {
  label: string
  placeholder?: string
  value?: string
  status?: '' | 'error'
<<<<<<< HEAD
  onChange?: ChangeEventHandler
}

const AppInput: React.FC<InputProps> = (props: InputProps) => {
  const { label, placeholder, value, status, onChange } = { ...props }
=======
  style?: any
}

const AppInput: React.FC<InputProps> = (props: InputProps) => {
  const { label, placeholder, value, status, style } = { ...props }
>>>>>>> ae9497642ed9379da3fb1ab0025b189de907a339
  return (
    <Wrapper>
      <label>
        {label}
<<<<<<< HEAD
        <span> {status ? '*' : ''}</span>
        <Input placeholder={placeholder} value={value} status={status} onChange={onChange} />
        <span> {status ? 'Please, specify the field' : ''}</span>
=======
        <span style={{ color: 'red' }}> {status ? '*' : ''}</span>
        <Input style={style} placeholder={placeholder} value={value} status={status} />
        <span style={{ color: 'red', height: '1em' }}>
          {status ? 'Please, specify the field' : ''}
        </span>
>>>>>>> ae9497642ed9379da3fb1ab0025b189de907a339
      </label>
    </Wrapper>
  )
}

export default AppInput
