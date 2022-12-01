import { Input, InputProps } from 'antd'
import React, { useState } from 'react'
import { Wrapper } from './AppInput.styles'

interface AppInputProps extends InputProps {
  errorText: string
  label: string
  handleChange: (value: string) => void
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  type,
  placeholder,
  value,
  status,
  handleChange,
  errorText
}) => {
  const [stateValue, setStateValue] = useState(value ? value : '')

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
            handleChange(event.target.value)
            setStateValue(event.target.value)
          }}
        />
        <span> {status ? errorText : ''}</span>
      </label>
    </Wrapper>
  )
}

export default AppInput
