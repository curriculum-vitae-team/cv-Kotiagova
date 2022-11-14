import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Input } from 'antd'
import { Wrapper } from './AppInput.styles'

type InputProps = {
  label: string
  type?: 'password' | ''
  placeholder?: string
  value?: string
  status?: '' | 'error'
  onChange?: any
}

const AppInput: React.FC<InputProps> = (props: InputProps) => {
  const { label, type, placeholder, value, status, onChange } = { ...props }
  const [stateValue, setStateValue] = useState(value ? value : '')

  useEffect(() => {
    onChange(stateValue)
  }, [stateValue])
  return (
    <Wrapper>
      <label>
        {label}
        <span> {status ? '*' : ''}</span>
        <Input
          type={type}
          placeholder={placeholder}
          value={stateValue}
          status={status}
          onChange={(event) => {
            setStateValue(event.target.value)
          }}
        />
        <span> {status ? 'Please, specify the field' : ''}</span>
      </label>
    </Wrapper>
  )
}

export default AppInput
