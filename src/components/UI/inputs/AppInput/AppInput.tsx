import React from 'react'
import { Input } from 'antd'
import css from './AppInput.module.css'

type InputProps = {
  label: string
  placeholder?: string
  value?: string
  status?: '' | 'error'
  style?: any
}

const AppInput: React.FC<InputProps> = (props: InputProps) => {
  const { label, placeholder, value, status, style } = { ...props }
  return (
    <div className={css.container}>
      <label>
        {label}
        <span style={{ color: 'red' }}> {status ? '*' : ''}</span>
        <Input style={style} placeholder={placeholder} value={value} status={status} />
        <span style={{ color: 'red', height: '1em' }}>
          {status ? 'Please, specify the field' : ''}
        </span>
      </label>
    </div>
  )
}

export default AppInput
