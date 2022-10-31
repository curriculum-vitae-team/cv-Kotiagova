import React from 'react'
import { Input } from 'antd'
import css from 'src/components/UI/inputs/AppInput/AppInput.module.css'
const { TextArea } = Input

type InputProps = {
  label: string
  placeholder?: string
  status?: '' | 'error'
}

const AppTextarea: React.FC<InputProps> = (props: InputProps) => {
  const { label, placeholder, status } = { ...props }
  return (
    <div className={css.container}>
      <label>
        {label}
        <span style={{ color: 'red' }}> {status ? '*' : ''}</span>
        {/*//TODO: resize???*/}
        <TextArea style={{ resize: 'none' }} placeholder={placeholder} status={status} />
        <span style={{ color: 'red' }}> {status ? 'Please, specify the field' : ''}</span>
      </label>
    </div>
  )
}

export default AppTextarea