import React from 'react'
import { Input } from 'antd'
import css from './AppInput.module.css'

type InputProps = {
  label: string
  placeholder?: string
  value?: string
  status?: '' | 'error'
}

const AppInput: React.FC<InputProps> = (props: InputProps) => {
  const { label, placeholder, value, status } = { ...props }
  return (
    <div className={css.container}>
      <label>
        {label}
        <span style={{ color: 'red' }}> {status ? '*' : ''}</span>
        <Input placeholder={placeholder} value={value} status={status} />
        <span style={{ color: 'red' }}> {status ? 'Please, specify the field' : ''}</span>
      </label>
    </div>
  )
}

export default AppInput
