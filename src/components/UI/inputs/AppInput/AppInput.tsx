import React, { ChangeEventHandler } from 'react'
import { Input } from 'antd'
import { Wrapper } from './AppInput.styles'

type InputProps = {
  label: string
  placeholder?: string
  value?: string
  status?: '' | 'error'
  handler?: ChangeEventHandler
}

const AppInput: React.FC<InputProps> = (props: InputProps) => {
  const { label, placeholder, value, status, handler } = { ...props }
  return (
    <Wrapper>
      <label>
        {label}
        <span> {status ? '*' : ''}</span>
        <Input placeholder={placeholder} value={value} status={status} onChange={handler} />
        <span> {status ? 'Please, specify the field' : ''}</span>
      </label>
    </Wrapper>
  )
}

export default AppInput
